const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
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

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000);
    });
  }

  async getOne(id) {
    return new Promise((resolve, reject) => {
      const product = this.products.find(item => item.id === id);
      if(!product){
        reject(new Error('product not found'));
      }
      const name = this.getTotal();
      resolve(product);
    })

  }

  async update(id, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1) {
          reject(new Error('product not found!'))
        }
        const product = this.products[index];
        this.products[index] = {...product, ...data};
        resolve(this.products[index]);
      }, 2000);
    });
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('product not found!');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
