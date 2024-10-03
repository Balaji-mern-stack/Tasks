import React, { useEffect, useState } from 'react'

function ApiUseEffect() {
    const [todosData, setTodosData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setTodosData(json)})
    },[])

  return (
    <div>
      {todosData && todosData.map(i => (
        <div>
        <li>{i.title}</li>
        <div>{i.id}</div>
        </div>
      ))}
    </div>
  )
}

export default ApiUseEffect
