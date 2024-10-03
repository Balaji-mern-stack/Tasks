import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case "increment":
         return   {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        case "reset":
            return {count:0}
    }

}

function UseReducerHook() {
    
    // state management hook, to manage complex states in a component

    const [state,dispatch] = useReducer(reducer,{count:0})
    function decrement(){
        dispatch({type:"decrement"})
    }
  return (
    <div>
        <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
      {state.count}
      <button onClick={decrement}>-</button>
      <button onClick={()=> dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default UseReducerHook
