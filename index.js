const express = require('express');
const { faker }  = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.send('Hola mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
 res.send('Hola soy un nuevo endpoint');
});

app.get('/products', (req, res) => {
  const { size } = req.query;
  const products = [];
  const limit = size || 100;
  for(let i = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }
 res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: "Producto 1",
    price: 1000
   });
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parámertos');
  }
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
