import { connect } from "react-redux";
import Graph from "../components/UI/Graph";
import '../css/record.css'

const Record = ({user,history}) =>{
    console.log(history)
    const test = history.map(v=>{
        return {
            label:v.data,
            value:v.point
        }
    })
    // const test = [
    //     {label:'2020/01/01',value:4},
    //     {label:'2020/01/02',value:5},
    //     {label:'2020/01/03',value:1},
    //     {label:'2020/01/04',value:3},
    //     {label:'2020/01/05',value:3},
    //     {label:'2020/01/02',value:5},
    //     {label:'2020/01/03',value:1},
    //     {label:'2020/01/04',value:12},
    //     {label:'2020/01/05',value:2},
    //     {label:'2020/01/02',value:5},
    //     {label:'2020/01/03',value:8},
    //     {label:'2020/01/04',value:10},
    //     {label:'2020/01/05',value:3},
    //     {label:'2020/01/02',value:6},
    //     {label:'2020/01/03',value:1},
    //     {label:'2020/01/04',value:5},
    //     {label:'2020/01/05',value:3},
    //     {label:'2020/01/02',value:5},
    //     {label:'2020/01/03',value:1},
    //     {label:'2020/01/04',value:22},
    //     {label:'2020/01/05',value:3},
    // ]

    const max = [...test].sort((a,b)=>b.value-a.value)[0].value

    return (
        <div className="record_wrap">
            <Graph data={test} max={max}></Graph>
        </div>
    )
}

function mapStateToProps(state, props) {
    const { user, history } = state;
    return { user, history }
}

function mapDispatchProps(dispatch) {
    return {
        // addTodo: (todo) => dispatch(ACTION.addTodo(todo)),
        // connectTodoDB: (user) => dispatch(ACTION.setTodo(user)),
        // resetTodo: (todo) => dispatch(ACTION.resetTodo(todo)),
        // setPoint: (todo) => dispatch(ACTION.setPoint(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Record);