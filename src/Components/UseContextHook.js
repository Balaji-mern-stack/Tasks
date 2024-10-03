import React, { createContext, useState } from 'react'
import UseContextChild from './UseContextChild'
export const dataContext = createContext()
function UseContextHook() {
  let [num, setNum] = useState(6)
    let data = "true"
    function handle(){
      console.log("checked..")
    }
  return (
    <dataContext.Provider value={{data,num,setNum,handle}}>
    <div>
      <h1>Parent</h1>
      <UseContextChild />
    </div>
    </dataContext.Provider>
  )
}

export default UseContextHook
