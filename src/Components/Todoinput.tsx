import React, { Component, ComponentProps, JSX, useState } from 'react'

export default function User() {

  const [title,setTitle]=useState<string>('');
  

  

   
 
  return (
    <div>
      <input type="text" value={title} style={{border:'2px solid red'}} onChange={(e)=>setTitle(e.target.value)}/>
      <h1>{title}</h1>
    </div>
  )
}
