import React from 'react'

export default function Todo({todos, setTodos, el}) {
    
    
    const deleteButtonHandler = () => {
        setTodos(todos.filter((s) => s.key!==el.key));
    }
    const completedHandler = () => {
        setTodos(todos.map(item => {
            if(item.key===el.key){
                return {
                    ...item, completed: !el.completed,
                }
            }
            return item;
        }))     
        
    }
    
    return (
        
        <div className={`todo ${el.completed?"strike-th":""}`}>
            <li className= {`todo-item ${el.completed?"strike-through":""}`}>{el.name}</li>
            <div className="todo-btn">
                <button onClick={completedHandler} className= " complete-btn"><i class="fas fa-check fa-3x"></i></button>
                <button onClick={deleteButtonHandler} className=" trash-btn"><i class="fas fa-backspace fa-3x"></i></button>
            </div>
        </div>
    )
}
