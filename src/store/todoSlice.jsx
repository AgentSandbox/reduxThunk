import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async function () {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

        const data = await response.json();

        return data;
    }
);

const initialState = {
    arr: [],
    status: null,
    error: null,
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.arr.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const compl = state.arr.find((t) => t.id === action.payload)
            compl.completed = !compl.completed
        },
        deleteTodo: (state, action) => {
            state.arr = state.arr.filter((t) => t.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.satus = "loading";
                state.err = "";
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.satus = "error";
                state.error = action.payload;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.arr = action.payload;
                state.status = 'done';
            })
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer
