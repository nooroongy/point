import { useState } from 'react';
import { connect } from 'react-redux';
import Mobile from '../components/Layout/Mobile';
import Point from '../components/point';
import { ACTION } from '../components/store';
import Checker from '../components/UI/Checker';
import Toogle from '../components/UI/Toogle';
import { FB_DB } from '../components/_firebase';
import '../css/home.css'

const Home = ({ todoList, addTodo, user, setPoint, point, resetTodo, connectTodoDB }) => {
    const [total, setTotal] = useState(0);

    const onPointChange = (changedPoint) => {
        setTotal(total + changedPoint)
    }

    const test = () => {
        const testData = {
            title: '코딩공부하기',
            type: "B",
            score: 5,
            subScore:5,
            comboScore:30,
            failScore:0,
            uid: user.uid
        }

        FB_DB.add("todoList", testData, (res) => {
            addTodo(testData)
        })

        // let today = new Date();   

        // let year = today.getFullYear() +''; // 년도
        // let month = today.getMonth() + 1 +'';  // 월
        // let date = today.getDate() +'';  // 날짜
        // FB_DB.add("history",{
        //     id:user.uid,
        //     data:year + month + date,
        //     point:0
        // } ,(res)=>{
        //     // addTodo(testData)
        // })
    }

    function pointTest() {
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
            <div className='home__total_wrap'>{total}</div>
            <button onClick={test}>addTest</button>
            <button onClick={pointTest}>pointTest</button>
            <Mobile>
                {todoList.map((v, i) => {
                    return <Point
                        key={i}
                        id={i}
                        title={v.title}
                        type={v.type}
                        score={v.score}
                        subScore={v.subScore}
                        onChange={onPointChange}
                    />
                })}
            </Mobile>
        </div>
    )
}

function mapStateToProps(state, props) {
    const { user, point, todoList } = state;
    return { user, point, todoList }
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