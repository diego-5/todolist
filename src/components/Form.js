import React, {useState, useRef} from 'react';
import Todo from './Todo';
    let ids = 0;// id for each todo object

function Form({inputText, setInputText, todos, setTodos}){
    const setInputHandler = (e) =>{
        setInputText(e.target.value);
    }
    const setTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {name: inputText, completed: false, key: Math.random()*1000},
        ]);
        setInputText("");
    }
    return(
        <form className="task-container" id="task-form">
            <h2 className="task-heading">Task:</h2>
            <input value={inputText} onChange={setInputHandler}type="text"  className="text-field"></input>
            <input onClick={setTodoHandler} type="submit" name="submit" className="btn submit-btn" value="Add Task"></input>
        </form>
    );
}

export default Form;
// function Form({inputText, setInputText, todos, setTodos}){
//     function inputTextHandler(e) {
//         console.log(e.target.value);
//         setInputText(e.target.value)
//     }
//     function submitTodoHandler(e){
//         e.preventDefault();
//         setTodos([...todos, {text: inputText, completed: false, id: id+=1}
//         ]);
//         setInputText("");
//     }