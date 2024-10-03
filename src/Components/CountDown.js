import React, { useEffect, useState } from 'react'

function CountDown() {
    const [count, setCount] = useState(30)
    useEffect(() => {
        setTimeout(() => {
            setCount(count-1)
        },1000)

    })
  return (
    <div>
      {count}
    </div>
  )
}

export default CountDown
