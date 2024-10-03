import React, { useContext } from 'react'
import { dataContext } from './UseContextHook'

function UseContextChild2() {
    let {data,num,setNum,handle} = useContext(dataContext)
  return (
    <div>
        <h1>Grand child</h1>
      {data}
      {num}
      {setNum(8)}
      {handle()}
    </div>
  )
}

export default UseContextChild2
