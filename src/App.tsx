import React, { useEffect, useState } from 'react'
import Todoinput from './Components/Todoinput'
import Todolist from './Components/Todolist';
import axios from 'axios';

interface Todo {
  id : number;
  title : string;
  completed : boolean;
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

const togglecompleted = (id: number) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
  const changedTodo = updatedTodos.find((todo) => todo.id === id);

  if (changedTodo) {
    axios.patch(`http://localhost:3000/todos/${id}`, {
      completed: changedTodo.completed,
    });
  }
};

const deleteTodo = (id: number) => {
  axios.delete(`http://localhost:3000/todos/${id}`)
    .then((res) => {
      console.log('Deleted from server:', res);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    })
    .catch((err) => {
      console.error('Error deleting:', err);
      alert('خطا در حذف از سرور');
    });
};




  return (
    <div >
      <Todoinput addone={addTask}/>
      <Todolist todos={todos} togglecompleted={togglecompleted} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
