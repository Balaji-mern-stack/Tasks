import React from 'react'
import ReactPropChild from './ReactPropChild'

function ReactProps() {
    let a=56
    let b = "react"

  return (
    <div>
        <h1>parent component</h1>
      <ReactPropChild x={a} y={b} />

    </div>
  )
}

export default ReactProps
