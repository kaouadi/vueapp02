/**
 * Mocking client-server processing
 */
const _products = [
    {"id": 1, "name": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "name": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "name": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },

}