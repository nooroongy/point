import { useState } from 'react';
import { connect } from 'react-redux';
import Mobile from '../components/Layout/Mobile';
import Point from '../components/point';
import { ACTION } from '../components/store';
import Checker from '../components/UI/Checker';
import Toogle from '../components/UI/Toogle';
import { FB_DB } from '../components/_firebase';
import '../css/home.css'

const Home = ({ todoList,addTodo }) => {
    const [total, setTotal] = useState(0);

    const onPointChange = (changedPoint) => {
        setTotal(total + changedPoint)
    }

    const test = () =>{
        const testData = {
            title: '코딩공부하기',
            state: 'success',
            type: "B",
            score: '5',
            subScore: '5',
        }

        FB_DB.add("todoList",testData ,(res)=>{
            addTodo(testData)
        })
    }

    return (
        <div className='home__wrap'>
            <div className='home__total_wrap'>{total}</div>
            <button onClick={test}>addTest</button>
            <Mobile>
                {todoList.map((v, i) => {
                    return <Point
                        key={i}
                        id={i}
                        title={v.title}
                        state={v.state}
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
    return {}
}

function mapDispatchProps(dispatch) {
    return {
        addTodo: (todo) => dispatch(ACTION.addTodo(todo)),
        setTodo: (todo) => dispatch(ACTION.setTodo(todo)),
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Home);