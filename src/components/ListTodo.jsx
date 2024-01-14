import {useDispatch, useSelector} from "react-redux";
import {toggleTodo, deleteTodo} from "/src/store/todoSlice.jsx";

const ListTodo = () => {
    const textTodo = useSelector((state) => state.todos.arr)
    const dispatch = useDispatch()

    return (
        <>
            <ul>
                {
                    textTodo.map(t => <li key={t.id}>
                        <input
                            onClick={() => {
                                dispatch(toggleTodo(t.id))
                            }}
                            type="checkbox"
                            checked={t.completed}
                        />
                        <span
                            className={t.completed ? "textCompleted" : ""}
                        >
                            {t.title}
                        </span>
                        <span
                            onClick={() => {
                                dispatch(deleteTodo(t.id))
                            }}
                            className="delete"
                        >
                            &times;
                        </span>
                    </li>)
                }
            </ul>
        </>
    );
};

export default ListTodo;