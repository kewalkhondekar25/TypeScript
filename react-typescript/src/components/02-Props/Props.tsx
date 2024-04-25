import React from 'react'

interface ComponentProps {
    name: string;
    id: number
}

const Props = ({name, id}: ComponentProps) => {
  return (
    <div>
        <h3>{name}</h3>
        <h4>{id}</h4>
    </div>
  )
}

export default Props