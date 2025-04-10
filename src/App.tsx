import React, { useEffect, useState } from 'react'
import Todoinput from './Components/Todoinput'
import Delettodo from './Components/Delettodo';
import Todolist from './Components/Todolist';
import axios from 'axios';

interface Todo {
  id : number;
  title : string;
  complected : boolean;
  description: string;
}


function App() {
 const [todos, setTodos] = useState<Todo[]>([]);
 useEffect(()=>{
  axios.get<Todo[]>('http://localhost:3000/todos').then((response)=>{
    setTodos(response.data);
  })
 })

 const addTask = (todo: Omit<Todo, "id">) => {
  axios.post<Todo>('http://localhost:3000/todos', todo)
    .then((response) => {
      setTodos([...todos, response.data]);
    });
};

const deleteTask = (id: number): void => {
  axios.delete<void>(`http://localhost:3000/todos/${id}`)
    .then(() => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    });
};


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
    <div >
      <Todoinput addone={addTask}/>
      <Todolist todos={todos}/>
      <Delettodo/>
    </div>
  );
}

export default App;
