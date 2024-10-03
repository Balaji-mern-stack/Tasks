import React, { useContext } from 'react'
import { countContext } from './UsecontextExp'

function UsecontextExpchild2() {
    const{count,decrease}=useContext(countContext)
  return (
    <div>
        <p>{count}</p>
      <button onClick={decrease}>decrease</button>
      
    </div>
  )
}

export default UsecontextExpchild2
