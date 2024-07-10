const express = require('express');
const router = express.Router();

// Example products data (replace with actual API calls)
const products = [
  { id: 1, name: 'Product 1', company: 'Company A', category: 'Category A', price: 100, rating: 4.5, discount: 10, availability: true },
  { id: 2, name: 'Product 2', company: 'Company B', category: 'Category B', price: 120, rating: 4.0, discount: 5, availability: false },
  // Add more products as needed
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Get product by ID
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
