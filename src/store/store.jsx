import {configureStore} from "@reduxjs/toolkit"
import todoSlice from "./todoSlice.jsx";

export default configureStore({
    reducer: {
        todos: todoSlice
    }
})