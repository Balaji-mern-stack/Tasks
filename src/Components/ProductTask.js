
import React, { createContext, useState, useCallback } from 'react';
import ProductChild from './ProductChild';


export const Productcontext = createContext();

const products = {
  1: { name: 'SamsungS21FE', description: 'Fan Edition', price: 29999 },
  2: { name: 'Iphone14ProMax', description: 'Popular', price: 199999 },
  3: { name: 'GooglePixel', description: 'Good Quality', price: 59999 },
};

function ProductTask() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [history, setHistory] = useState([]);

  const showProductDetails = (productId) => {
    setSelectedProductId(productId);
  };

  const addToTotalPrice = useCallback(() => {
    if (selectedProductId) {
      const productPrice = products[selectedProductId]?.price || 0;
      setTotalPrice(prevTotal => prevTotal + productPrice);
      setHistory(prevHistory => [...prevHistory, products[selectedProductId]]);
    }
  }, [selectedProductId]);

  const deleteFromHistory = useCallback((index) => {
    const productToRemove = history[index];
    setHistory(prevHistory => prevHistory.filter((_, i) => i !== index));
    setTotalPrice(prevTotal => prevTotal - (productToRemove?.price || 0));
  }, [history]);

  return (
    <Productcontext.Provider value={{ selectedProductId, totalPrice, history, showProductDetails, addToTotalPrice, deleteFromHistory }}>
      <div>
        <button onClick={() => showProductDetails(1)}>Show Product 1 Details</button>
        <button onClick={() => showProductDetails(2)}>Show Product 2 Details</button>
        <button onClick={() => showProductDetails(3)}>Show Product 3 Details</button>
        <button onClick={addToTotalPrice}>Add to Total Price</button>
        <ProductChild />
        <h2>Total Price: ₹{totalPrice}</h2>
      </div>
    </Productcontext.Provider>
  );
}

export default ProductTask;
