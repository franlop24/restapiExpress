const express = require('express');
const ProductsService = require('../services/product.service');

const router = express.Router();

const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.getAll();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.getOne(id);
  if(product){
    res.json(product);
  } else {
    res.status(404).json({
      message: 'Product Not Found!'
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
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
