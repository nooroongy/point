import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'useReducer',
    initialState: {
        user: {},
        todoList: []
    },
    reducers: {
        setUser: (state, action) => { state.user = action.payload },
        setTodo: (state, action) => { state.todoList = action.payload },
        // setTodo: (state, action) => { 
        //     let soltTmp = [...action.payload]
        //     soltTmp.sort((a,b)=>b.date -a.date)

        //     state.sleepData = soltTmp
        // },
        setColorSet: (state, action) => { state.colorSet = action.payload },
        removeSleep: (state, action) => {
            state.sleepData = state.sleepData.filter(data => data.id !== action.payload)
        },
        addTodo: (state, action) => {
            state.todoList = [action.payload, ...state.todoList];
        }
    }
})

export const ACTION = slice.actions;
export default configureStore({ reducer: slice.reducer })