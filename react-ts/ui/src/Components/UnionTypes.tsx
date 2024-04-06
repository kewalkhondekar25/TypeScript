import React from 'react'

type args = number | string;

const UnionTypes = (id: args) => {
  return (
    <div>
        <h3>UnionTypes</h3>
        <h4>{id}</h4>
    </div>
  )
}

export default UnionTypes