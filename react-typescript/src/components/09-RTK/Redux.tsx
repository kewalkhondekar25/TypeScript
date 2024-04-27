import React from 'react'
import { useAppSelector, useAppDispatch } from './hooks'
import { increment, decrement, reset, setStatus } from './features/counterSlice'

const Redux = () => {
  
  const {count, status} = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3>Redux Tool Kit</h3>
      <div>
        <h4>Count: {count}</h4>
        <h5>Status: {status}</h5>
        <div className='container'>
          <button
            onClick={() => dispatch(increment())}>Increment</button>
          <button
            onClick={() => dispatch(decrement())}>Decrement</button>
          <button
            onClick={() => dispatch(reset())}>Reset</button>
          <button
            onClick={() => dispatch(setStatus("active"))}>Set Status Active</button>
          <button
            onClick={() => dispatch(setStatus("inactive"))}>Set Status Inactive</button>
        </div>
      </div>
    </div>
  )
}

export default Redux