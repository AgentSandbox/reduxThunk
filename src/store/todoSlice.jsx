import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
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
                console.log("LOADING")
                state.status = "loading";
                state.error = "";
            })
            .addCase(fetchTodos.rejected,
                (state, action
                ) => {
                    state.status = "error";
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
