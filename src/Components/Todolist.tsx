import React from 'react'
interface Todo {
    id : number;
    title : string;
    completed : boolean;
    description: string;
  }
type props = {
    todos : Todo[];
    togglecompleted : (id : number) => void
    deleteTodo : (id : number)=> void
}

export default function Todolist({todos,togglecompleted,deleteTodo}:props) {
  return (
    <div className='w-full max-w-4xl mx-auto  flex flex-col'>
        {
            todos.map((todo)=>{
                return(
                    <div   className={`flex flex-row gap-3 border ${
                        todo.completed ? 'line-through' : ''
                      }`} key={todo.id}>
                        <h1 className=''>{todo.title}</h1>  :
                        <p>{todo.description}</p>
                        <input checked={todo.completed} type='checkbox' onChange={()=> togglecompleted(todo.id)} 
                        />
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded
                        focus:outline-none focus:shadow-outline' type='button' onClick={()=>deleteTodo(todo.id)}>delete</button>
    
                    </div>
                )
            })
        }

    </div>
  )
}
