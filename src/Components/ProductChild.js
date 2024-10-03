import React, { useContext } from 'react';
import { Productcontext } from './ProductTask';

function ProductChild() {
  const context = useContext(Productcontext);

  if (!context) {
    return <div>Error: Context is not available.</div>;
  }

  const { selectedProductId, history, deleteFromHistory } = context;

  const products = {
    1: { name: 'SamsungS21FE', description: 'Fan Edition', price: "29,999" },
    2: { name: 'Iphone14ProMax', description: 'Popular', price: "1,99,999" },
    3: { name: 'GooglePixel', description: 'Good Quality', price: "59,999" },
  };

  const product = products[selectedProductId];

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ₹{product.price}</p>
        </div>
      )}
      <h3>History</h3>
      <ul>
        {history.map((prod, index) => (
          <li key={index}>
            {prod.name} - ₹{prod.price}
            <button onClick={() => deleteFromHistory(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductChild;
