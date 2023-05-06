import React, { useState } from 'react';
import TodoTable from './TodoTable.js';
// JOKAISESSA TIEDOSTOSSA SAA JA PITÄÄ OLLA YKSI EXPORT DEFAULT
export default function Todolist() {
    //STATE YKSITTÄISEN TODO-ITEMIN SISÄLLÖKSI
    //STATE VAIHTOEHDOT ON '', 0 TAI []
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }


    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }



    return (
        <div className="App">
           
            <div>
                <form onSubmit={addTodo}>
                    
                    Description:
                    <input type="text" name="todo" value={todo.todo} onChange={inputChanged} />
                    Date:
                    <input type="text" name="date" value={todo.date} onChange={inputChanged} />
                    <input type="submit" value="Add" />

                </form>
            </div>
            <TodoTable todos={todos} />
        </div>

    );
}