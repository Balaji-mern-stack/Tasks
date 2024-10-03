import React, { useContext } from 'react'
import { countContext } from './UsecontextExp'
import UsecontextExpchild2 from './UsecontextExpchild2';

function UsecontextExpchild() {
        const {count, increase}  = useContext(countContext);
  return (
    <div>
        <p>{count}</p>
        
      <button onClick={increase}>increase</button>
      
    
      </div>
  )
}

export default UsecontextExpchild
