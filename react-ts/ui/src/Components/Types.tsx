import React from 'react'

type User = {
    name: string,
    email: string,
    age: number
}

const Types = (props: User) => {
  return (
    <div>{props.email}</div>
  )
}

export default Types