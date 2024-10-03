import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card ,Button, Row} from 'react-bootstrap'
function ApiExp() {

    const[product, setproduct]= useState()

    useEffect(()=>{

        axios.get('https://fakestoreapi.in/api/products')
            .then(res=>{
              // console.log(res.data.products)
                setproduct(res.data.products)
            })
    })
  return (
    <div>
        <Row>
      {
        product && product.map(i=>(
        
        <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title><div>{i.title}</div></Card.Title>
        <Card.Text>
         <div>
            <img src={i.image} className='img1'></img>
         </div>
         <div>
            ${i.price}
         </div>
         <div>
            {i.description}
         </div>
         <div>
            {i.category}
         </div>
        </Card.Text>
        <Button className='Button' variant="primary">Chart</Button>
      </Card.Body>
    </Card>

            
        ))
      }
      </Row>
    </div>
  )
}

export default ApiExp
