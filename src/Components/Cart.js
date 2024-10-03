import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import { Card, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const truncateDescription = (description, wordLimit = 40) => {
  const words = description.split(' ');
  if (words.length <= wordLimit) return description;

  return words.slice(0, wordLimit).join(' ') + '...';
};

const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
};

const countItemsInCart = (cart) => {
  return cart.length;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

function Cart() {
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [view, setView] = useState('products'); 

  useEffect(() => {
    axios.get("https://fakestoreapi.in/api/products")
      .then(res => {
        setProducts(res.data.products);
      });
  }, []);

  const handleAddToCart = (product) => {
    Swal.fire({
      title: `${product.title}`,
      html: `
        <img src="${product.image}" alt="${product.title}" style="width: 100%; margin-bottom: 10px;" />
        <h4>Price: $${product.price}</h4>
        <p>${product.description}</p>
        <p>Category: ${product.category}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
      cancelButtonText: 'Close',
      preConfirm: () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        Swal.fire({
          title: 'Added to Cart',
          text: `${product.title} has been added to your cart!`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    });
  };

  const handleViewToggle = () => {
    setView(view === 'products' ? 'cart' : 'products');
  };

  return (
    <div>
      <h2>{view === 'products' ? 'Products' : 'Cart'}</h2>
      <Button style={{ width: "5rem", marginLeft: "1180px" }} onClick={handleViewToggle}>
        {view === 'products' ? 'Cart' : 'Products'}
      </Button>
      {view === 'products' ? (
        <Row>
          {products.map(product => (
            <Card key={product.id} style={{ width: '20rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <div>${product.price}</div>
                  <div>{truncateDescription(product.description)}</div>
                  <div>{product.category}</div>
                </Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      ) : (
        <div>
          <Row>
            {cart.map(item => (
              <Card key={item.id} style={{ width: '20rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <div>${item.price}</div>
                    <div>{truncateDescription(item.description)}</div>
                    <div>{item.category}</div>
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  >
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
          <div style={{ marginTop: '20px', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Total Items: {countItemsInCart(cart)}
          </div>
          <div style={{ marginTop: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Total Price: ${calculateTotalPrice(cart)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
