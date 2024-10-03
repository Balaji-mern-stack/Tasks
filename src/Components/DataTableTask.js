import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
function DataTableTask() {

    const[detalis,setdetalis]=useState()

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {

      setdetalis(json)})
    
    },[])

    const columns=[{
        name:"ID",
        selector: row=>row.id,

    },{
        name:"NAME",
        selector: row=>row.name
    },{
        name:"EMAIL",
        selector: row=>row.email
    }]

  return (

    <div>
        <DataTable
        columns={columns}
        data={detalis}
        pagination
        highlightOnHover
        />
      
    </div>
  )
}

export default DataTableTask
