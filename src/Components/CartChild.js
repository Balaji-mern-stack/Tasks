// CartItems.js
import React from 'react';
import { useCart } from './CartContext'; // Ensure this path is correct
import { ListGroup } from 'react-bootstrap';

function CartItems() {
  const { cart } = useCart(); // Use the hook here

  return (
    <div>
      <h2>Your Cart</h2>
      <ListGroup>
        {cart.map(item => (
          <ListGroup.Item key={item.id}>
            <div>{item.title}</div>
            <div>${item.price}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CartItems;
