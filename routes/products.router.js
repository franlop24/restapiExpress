const express = require('express');
const ProductsService = require('../services/product.service');

const router = express.Router();

const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.getAll();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.getOne(id);
  if(product){
    res.json(product);
  } else {
    res.status(404).json({
      message: 'Product Not Found!'
    });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({message: 'Product not found!'});
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
});

module.exports = router;
