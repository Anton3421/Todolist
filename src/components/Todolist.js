import React, {useState} from 'react';
import TodoTable from "./TodoTable.js";
// JOKAISESSA TIEDOSTOSSA SAA JA PITÄÄ OLLA YKSI EXPORT DEFAULT
export default function Todolist() {
    //STATE YKSITTÄISEN TODO-ITEMIN SISÄLLÖKSI
    //STATE VAIHTOEHDOT ON '', 0 TAI []
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    
    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }
    
    
    const addTodo = () => {
       // console.log("ADD TODO")
       // SPREAD NOTAATIOLLA PYSTYY LISÄÄMÄÄN TAULUKKOON YHDEN SOLUN
       setTodos([...todos, todo]);
       setTodo("");
    }
    

    
    return (
        <div>
            <div className="otsikko">
            <input
            placeholder='description'
            value={todo}
            onChange={event => setTodo(event.target.value)}
            />
        <button onClick={addTodo}>Add</button>
        </div>
        <table>
            <tbody>
                {
                    todos.map((todo, index) =>
                        <tr key={index}>
                        <td>{todo}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <TodoTable />
        </div>

    );
}