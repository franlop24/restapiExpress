const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
 res.send('Hola mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
 res.send('Hola soy un nuevo endpoint');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
