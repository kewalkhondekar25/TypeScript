import React from 'react'

const Redux = () => {
  return (
    <div>
      <h3>Redux Tool Kit</h3>
      <div>
        <h4>Count: 0</h4>
        <h5>Status: pending</h5>
        <div className='container'>
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
          <button>Set Status Active</button>
          <button>Set Status Inactive</button>
        </div>
      </div>
    </div>
  )
}

export default Redux