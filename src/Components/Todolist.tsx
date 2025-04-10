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
    <div className='w-full max-w-4xl mx-auto border border-zinc-950 '>
        {
            todos.map((todo)=>{
                return(
                    <div key={todo.id}>
                        <h1>{todo.title}</h1> :
                        <p>{todo.description}</p>
                        <p>{todo.complected}</p>
                    </div>
                )
            })
        }

    </div>
  )
}
