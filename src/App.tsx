import React, { useState } from 'react'
import Todoinput from './Components/Todoinput'
import Delettodo from './Components/Delettodo';
import Todolist from './Components/Todolist';

interface Todo {
  id : number;
  title : string;
  complected : boolean;
  description: string;
}





function App() {
 const [todos, setTodos] = useState<Todo[]>([]);
 const addTask = (todo : Todo)=>{
  setTodos([...todos,todo]);
 }

 const deleteTask = (id : number)=>{
  const newTodos = todos.filter((todo)=>todo.id !== id);
  setTodos(newTodos);
 }

 const completeTask = (id : number)=>{
  
  const newTodos = todos.map((todo)=>{
    if(todo.id === id){
      return {...todo , complected : !todo.complected}
    }
    else{
      return todo;
    }
   
  });
  setTodos(newTodos);
 }

  return (
    <div>
      <Todoinput/>
      <Todolist todos={todos}/>
      <Delettodo/>
    </div>
  );
}

export default App;
