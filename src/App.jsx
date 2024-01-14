import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"

import {addTodo, fetchTodos} from "./store/todoSlice.jsx";
import ListTodo from "./components/ListTodo.jsx";
import './App.css'
import {v1} from "uuid"
import NewTodoForm from "./components/NewTodoForm.jsx";

function App() {
    const [text, setText] = useState("")

    const dispatch = useDispatch()
    const error = useSelector((state) => state.todos.error)
    const status = useSelector((state) => state.todos.status)

    const onClickHandle = () => {
        if (text) {
            dispatch(addTodo({
                id: v1(),
                title: text,
                completed: false
            }))
        }
        setText("")
    }

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div className="App">
            <NewTodoForm
                value={text}
                updateText={setText}
                handleAction={onClickHandle}
            />
            {error && <h2>An error occured: {error}</h2>}
            {status === "loading" && <h2>LOADING !!!!!!</h2>}

            <ListTodo/>
        </div>
    )
}

export default App
