import React from 'react'

function MouseEvents() {

    function handleMouseOver(){
        console.log("mouse over")
    }

    function handleMouseOut(){
        console.log("mouse out")
    }

  return (
    <div onMouseDown={handleMouseOver}  onMouseUp={handleMouseOut}>

React is a JavaScript library for building user interfaces.

React is used to build single-page applications.

React allows us to create reusable UI components.
<button >click</button>
    </div>
  )
}

export default MouseEvents
