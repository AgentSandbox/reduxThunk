import {useState} from "react";
import './App.css'
import {v1} from "uuid"

function App() {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")

    const onClickHandle = () => {
        if (text) {
            setTodo([...todo, {
                id: v1(),
                text: text,
                completed: false
            }])
        }
        setText("")
    }
    return (
        <div className="App">
            <label>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text"/>
                <button onClick={onClickHandle}>ADD TODO</button>
            </label>
            <ul>
            {
                todo.map(t => <li key={t.id}>
                    <input type="checkbox"/>
                    <span>{t.text}</span>
                    <span style={{color: 'red'}}>&times;</span>
                </li>)
            }
            </ul>
        </div>
    )
}

export default App
