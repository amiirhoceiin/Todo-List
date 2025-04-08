import React from 'react'
interface Todo {
    id : number;
    title : string;
    complected : boolean;
    description: string;
  }
type props = {
    todos : Todo[];
}

export default function Todolist({todos}:props) {
  return (
    <div>

    </div>
  )
}
