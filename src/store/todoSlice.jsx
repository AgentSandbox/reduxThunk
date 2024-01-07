import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    arr: []
}

export const todoSlice = createSlice({
    name: "to",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.arr.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const compl = state.arr.find((t)=>t.id === action.payload)
            compl.completed = !compl.completed
        },
        deleteTodo: (state, action) => {
            state.arr = state.arr.filter((t) => t.id !== action.payload)
        }
    }
})

export const{addTodo, toggleTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer
