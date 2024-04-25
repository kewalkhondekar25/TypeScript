import React from 'react'

interface ComponentProps {
    name: string;
    id: number;
    children: React.ReactNode
}

const Props = ({name, id, children}: ComponentProps) => {
  return (
    <div>
        <h3>{name}</h3>
        <h4>{id}</h4>
        {children}
    </div>
  )
}

export default Props