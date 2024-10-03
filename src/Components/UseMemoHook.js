import React, { useMemo, useState } from 'react'

function UseMemoHook() {
    const [num, setNum] = useState(0)
    const double = useMemo(() => {
        
        console.log("calculating..")
        return num*2
    },[num])
    console.log(double)

    
  return (
    <div>
      <button onClick={() => {setNum(num+1)}}>click</button>
      <input type='text' onChange={(e) => {setNum(Number(e.target.value))}} />
      {double}
    </div>
  )
}

export default UseMemoHook
