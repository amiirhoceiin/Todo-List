import React, { Component, ComponentProps, JSX, useState } from 'react'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

type Props = {
  addone: (todo: Omit<Todo, "id">) => void;
}

export default function Todoinput({addone}: Props) {
  const [title ,setTitle] = useState<string>('');
  const [description , setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    if(title && description){
      addone({title, description, completed: false});
      setTitle('');
      setDescription('');
    }
    else {
      alert('please fill all the fields');
    }

  }
  return (
    <form onSubmit={handleSubmit} className='w-full max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-14'>
      <input className='shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='title' value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)}/>
      <input className='shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='description' value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setDescription(e.target.value)}/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>add</button>
    </form>
  )
}
