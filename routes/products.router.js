const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const products = [];
  const limit = size || 100;
  for(let i = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
 res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: "Producto 1",
    price: 1000
   });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Producto Creado',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated!',
    data: body,
    id: id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Deleted!',
    id
  });
});

module.exports = router;
