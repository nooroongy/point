import { configureStore, createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'useReducer',
    initialState: {
        user: {},
        todoList: [],
        point:{
            value:0
        },
        todayPoint:0,
        history:[]
    },
    reducers: {
        setUser: (state, action) => { state.user = action.payload },
        setTodo: (state, action) => { state.todoList = action.payload },
        resetTodo: (state) => { state.todoList = [] },
        setPoint: (state, action) => { 
            state.point = action.payload
        },
        setTodayPoint: (state, action) => { state.todayPoint = action.payload },
        setHistory: (state, action) => { state.history = action.payload },
        // setTodo: (state, action) => { 
        //     let soltTmp = [...action.payload]
        //     soltTmp.sort((a,b)=>b.date -a.date)

        //     state.sleepData = soltTmp
        // },
        // removeSleep: (state, action) => {
        //     state.sleepData = state.sleepData.filter(data => data.id !== action.payload)
        // },
        addTodo: (state, action) => {
            state.todoList = [action.payload, ...state.todoList];
        }
    }
})

export const ACTION = slice.actions;
export default configureStore({ reducer: slice.reducer })