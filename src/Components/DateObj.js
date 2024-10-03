import React from 'react'

function DateObj() {
    let currentDate = new Date()
    let dob = new Date("12-10-2023");  // MM/ dd/ yr

    console.log(dob.getDate());
    console.log(currentDate.getDay());


    

    
    
  return (
    <div>
      {currentDate.toDateString()}
      {dob.toDateString()}
    </div>
  )
}

export default DateObj
