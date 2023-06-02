const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for(let i = 0; i < limit; i++){
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  create() {

  }

  getAll() {
    return this.products;
  }

  getOne(id) {
    return this.products.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }
}

module.exports = ProductsService;
