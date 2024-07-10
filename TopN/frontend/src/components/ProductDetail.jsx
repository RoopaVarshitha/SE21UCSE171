import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;