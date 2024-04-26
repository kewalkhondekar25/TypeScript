import React from 'react'
import { useReducer } from "react";
import {initialState, Reducer} from "./Reducer"

//create reducer


const ReducerFunc = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div>
      <h3>use Reducer</h3>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button
        onClick={() => {
            console.log("decrement");
            
        }}>-</button>
        <p>count: {state.count}</p>
        <button
        onClick={() => {
            console.log("increment");
            
        }}>+</button>
      </div>
    </div>
  )
}

export default ReducerFunc