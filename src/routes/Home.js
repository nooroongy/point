import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Mobile from '../components/Layout/Mobile';
import Point from '../components/point';
import { ACTION } from '../components/store';
import { FB_DB } from '../components/_firebase';
import '../css/home.css'

const Home = ({ todoList, addTodo, user, setPoint, point, resetTodo, connectTodoDB, defaultPoint }) => {
    const [total, setTotal] = useState(0);

    const onPointChange = (changedPoint) => {
        setTotal(total * 1 + changedPoint)
    }

    useEffect(() => {
        setTotal(defaultPoint)
    }, [defaultPoint])

    const test = () => {
        // const testData = {
        //     title: '코딩공부하기',
        //     type: "B",
        //     score: 5,
        //     subScore:5,
        //     comboScore:30,
        //     failScore:0,
        //     subFailScore:0,
        //     uid: user.uid
        // }

        // FB_DB.add("todoList", testData, (res) => {
        //     addTodo(testData)
        // })

        let today = new Date();

        let year = today.getFullYear() + ''; // 년도
        let month = today.getMonth() + 1 + '';  // 월
        let date = today.getDate() + '';  // 날짜

        month = (month < 10 ? '0' : '') + month;
        date = (date < 10 ? '0' : '') + date;

        FB_DB.add("history", {
            uid: user.uid,
            data: year + month + date,
            point: total
        }, (res) => {
            modiftPoint()
        })
    }

    function modiftPoint() {
        FB_DB.update("point", point.id, {
            point: point.point + total,
            uid: user.uid
        }, setPoint({ ...point, point: point.point + total }))
        setTotal(0)
        resetTodo();

        //todoList DB에 연결
        FB_DB.get('todoList').then(res => {
            connectTodoDB(res.filter(data => data.uid === user.uid))
        })
    }

    return (
        <div className='home__wrap'>
            <div className='home__total_wrap'>
                <span>오늘의 점수 :{total}</span>
                <button className='home__confirm_btn' onClick={test}>확정</button>
            </div>

            <Mobile>
                {todoList.map((v, i) => {
                    return <Point
                        key={i}
                        id={i}
                        title={v.title}
                        type={v.type}
                        score={v.score}
                        subScore={v.subScore}
                        failScore={v.failScore}
                        subFailScore={v.subFailScore}
                        onChange={onPointChange}
                    />
                })}
            </Mobile>
        </div>
    )
}

function mapStateToProps(state, props) {
    const { user, point, todoList } = state;
    let defaultPoint = 0;
    todoList.forEach(v => {
        defaultPoint += v.failScore * 1
    })
    return { user, point, todoList, defaultPoint }
}

function mapDispatchProps(dispatch) {
    return {
        addTodo: (todo) => dispatch(ACTION.addTodo(todo)),
        connectTodoDB: (user) => dispatch(ACTION.setTodo(user)),
        resetTodo: (todo) => dispatch(ACTION.resetTodo(todo)),
        setPoint: (todo) => dispatch(ACTION.setPoint(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Home);