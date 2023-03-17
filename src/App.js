import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/Todolist';
import Todo from './components/Todo'

// components:
// Form.js: creates the entry text form for adding a task and adds entry text from inputText(useState) to the todos(useState)
// Todo.js: handles each individual task along with the delete and completed button
// Todolist.js: maps over todos useState to display all to do's and deleteFinished button

const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {
  const [inputText, setInputText] = useState(""); //useState for the text from input box
  const [todos, setTodos]= useState([]); //useState array for the To dos objects


//get todo from local memory
useEffect(()=> {
  const todoStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) //checks local storage variable todoStorage to see if anything exists in it. LOCAL_STORAGE_KEY IS Stringify object in array.
  
  if(todoStorage){setTodos(todoStorage)}//if anything exists in todoStorage set prior todos stored into the todo object useState.
}, [])
//store todo to local memory
useEffect(()=> {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

  
  return (
    <div className="App">
      <header>  
        <h1>Todo List</h1>
      </header> 
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos= {setTodos}/>
      
      
    </div>
  );
}

export default App;
