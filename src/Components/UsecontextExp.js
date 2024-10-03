import React, { createContext, useContext, useState } from 'react'
import UsecontextExpchild from './UsecontextExpchild';
 export const countContext=createContext()
 

function UsecontextExp() {
    let[count,setCount]=useState(0)
        const increase = () => setCount(count + 1);
        const decrease = () => setCount(count - 1);
    

  return (
    
      <countContext.Provider value={{count,increase,decrease}}>
        <div>
            <UsecontextExpchild/>
        </div>

      </countContext.Provider>
    
  )
}

export default UsecontextExp
