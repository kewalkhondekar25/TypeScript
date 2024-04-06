import React from 'react'

interface TodoProps{
    name: string,
    email: string,
    age: number
  };

const Interface = (todos: TodoProps) => {
    
  return (
    <div>
      <h3>{todos.name}</h3>
      <h4>{todos.email}</h4>
      <h5>{todos.age}</h5>
    </div>
  )
}

export default Interface