import React from 'react'

const Props = ({name, id}: {name: string; id: number}) => {
  return (
    <div>
        <h3>{name}</h3>
        <h4>{id}</h4>
    </div>
  )
}

export default Props