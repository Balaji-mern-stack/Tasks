import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    let [data, setdata] = useState()
    let [num, setNum] = useState(0)
    useEffect(() => {
        console.log("useeffect hook")
    },[num])

    // without array dependency => useeffect will call at every rendering
    // with empty array [] => only call at initial rendering
    // with any state name [state] => will call if the state value changed

  return (
    <div>
      <input type='text' onChange={(e) => setdata(e.target.value)} />
      <button onClick={() => setNum(num+1)}>click</button>
    </div>
  )
}

export default UseEffectHook
