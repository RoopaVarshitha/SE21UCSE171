



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.name}</h2>
            </Link>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
