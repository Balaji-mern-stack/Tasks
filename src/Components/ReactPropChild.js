import React from 'react'
import ReactChild2 from './ReactChild2'

//function ReactPropChild(props) {
    function ReactPropChild({x,y}) {
  //  console.log(props.x, props.y)
  //  let n= props.y

  return (
    <div>
        <h1>child components</h1>
      {/* {props.x}
      {n} */}

      {x}
      <br />
      {y}

      <ReactChild2 />
    </div>
  )
}

export default ReactPropChild
