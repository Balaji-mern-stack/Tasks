// import { setSelectionRange } from '@testing-library/user-event/dist/utils'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import DataTable, { SortOrder } from 'react-data-table-component'

// function DataTableTask1() {

//     const[detalis,setdetalis]=useState()
//     const[categoryid, setcategoryid]=useState(0)
//     const[category, setcategory]=useState()
//     const[description, setdescription]=useState()
//     const[categoryby,setcategoryby]=useState()
//     const [categoryData, setCategoryData] = useState({
//         categoryId:0,
//         category:"",
//         description:"",
//         createdBy:1
//     })

//     useEffect(()=>{

//         axios.get('http://catodotest.elevadosoftwares.com//Category/GetAllCategories')
//         .then(res=>{
//             setdetalis(res.data.categoryList)
//         })

//     },[])


//     function display(){
        
//         console.log(category);
//         console.log(description);
//         let data = {
//             categoryId:categoryid,
//             category:category,
//             description:description,
//             createdBy:1
//         }

//         axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory",data)
//         alert("saved!")
        
        
        
//     }

//     const columns=[{
//         name:"CATEGORY_ID",
//         selector : row=>row.categoryId,
//         sortable:true
//     },{
//         name:"CATEGORY",
//         selector : row=>row.category
//     },{
//         name:"DESCRIPTION",
//         selector: row=> row.description
//     },{
//         name:"CREATED_BY",
//         selector:row=>row.createdBy
//     }]

//   return (
//     <div >
//         <form>
//             category:
//             <input type='text'
//             name='caterory'
//             onChange={(e)=>{setcategory(e.target.value)}}
//             /><br/>
//             <br/>
//             description:
//             <input type='text'
//             name='description'
//             onChange={(e)=>{setdescription(e.target.value)}}
//             /><br/>
//             <button onClick={display}>Submit</button>
           

//         </form>
//         <DataTable
//         columns={columns}
//         data={detalis}
//         pagination
//         />
      
//     </div>
//   )
// }

// export default DataTableTask1


import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable, { SortOrder } from 'react-data-table-component'
import Swal from 'sweetalert2'

function DataTableTask1() {

    const[detalis,setdetalis]=useState()
   
    const [categoryData, setCategoryData] = useState({
        categoryId:0,
        category:"",
        description:"",
        createdBy:1
    })
    
  function getAllCategories(){
   // alert("test")
    axios.get('http://catodotest.elevadosoftwares.com//Category/GetAllCategories')
        .then(res=>{
            setdetalis(res.data.categoryList)
        })
  }
    

    useEffect(()=>{

        getAllCategories()

    },[])
    
      

    function handlechange(e){
        setCategoryData({...categoryData,[e.target.name]:e.target.value})
    }

    function display(e){
      e.preventDefault()
      
      
        axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory",categoryData)
        alert("saved successfully!")
        setCategoryData({
          category:"",
          description:""
        })
       
    }


   async function handledelete(id){
    console.log(id)
        const { value: text } = await Swal.fire({
          input: "textarea",
          inputLabel: "Message",
          inputPlaceholder: "Type your message here...",
          inputAttributes: {
            "aria-label": "Type your message here"
          },
          showCancelButton: true
        });
      
       
        if (text) {
          let data ={
            categoryId:id,
            removedRemarks:text,
            createdBy:1
          }
          axios.post("http://catodotest.elevadosoftwares.com/Category/RemoveCategory",data)
        }
       
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been deleted",
            showConfirmButton: false,
            timer: 1500
          });

          axios.get('http://catodotest.elevadosoftwares.com//Category/GetAllCategories')
        .then(res=>{
            setdetalis(res.data.categoryList)
        })
         
      }


      function handleedit(row){
        
        setCategoryData({
          categoryId:row.categoryId,
        category:row.category,
        description:row.description,
        createdBy:1

        })
        
        
      }

      
    const columns=[{
        name:"CATEGORY_ID",
        selector : row=>row.categoryId,
        sortable:true
    },{
        name:"CATEGORY",
        selector : row=>row.category
    },{
        name:"DESCRIPTION",
        selector: row=> row.description
    },{
        name:"CREATED_BY",
        selector:row=>row.createdBy
    },{
        name:"BUTTON",
        selector: (row) => 
            <div>
        <button onClick={()=>handleedit(row)}>edit</button> 
        <button onClick={()=>handledelete(row.categoryId)}>delete</button>
        </div>
    }
    ]

  return (
    <div >
        <form onSubmit={display}>
            category:
            <input type='text' 
            value={categoryData.category}
            name='category'
            
            onChange={handlechange}
            /><br/>
            <br/>
            description:
            <input type='text'
            value={categoryData.description}
            name='description'
            
            onChange={handlechange}
            /><br/>
            <button >Submit</button>
           

        </form>
        <DataTable
        columns={columns}
        data={detalis}
        pagination
        />
      
    </div>
  )
}

export default DataTableTask1
