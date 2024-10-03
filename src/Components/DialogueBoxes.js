import React from 'react'
import Swal from 'sweetalert2'

function DialogueBoxes() {
    function sweetalert(){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

  return (
    <div>
      <button onClick={() =>alert("button clicked")}>click</button>
      <button onClick={() =>window.confirm("do you want to save?")}>confirm</button>
      <button onClick={() =>window.prompt("enter ur name")}>prompt</button>
      <button onClick={sweetalert}>prompt</button>
    </div>
  )
}

export default DialogueBoxes
