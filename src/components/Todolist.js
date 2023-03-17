import React from 'react'
import Todo from './Todo'
export default function Todolist({todos, setTodos}) {

    const deleteFinishedHandler = () =>{
        setTodos(todos.filter((s) => s.completed===false));
    }
    
    return (
        <div className="todo-container2">
        <div className= "todo-container">
            <ul className= "todo-list">
                {todos.map((el)=> (
                    <Todo el={el} todos={todos} setTodos={setTodos}  key={todos.key}/>
                ))}
            </ul>
        </div>
           <div className="finished-container" > <button onClick={deleteFinishedHandler} className= "btn finished-btn">Clear Finished</button>
           </div>
        </div>
    )
}
