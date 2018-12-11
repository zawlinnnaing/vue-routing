const _products = [
  {
    productTitle: 'ABCN',
    image: require('../assets/product1.png'),
    productId: 1
  },
  {
    productTitle: 'KARMA',
    image: require('../assets/product2.png'),
    productId: 2
  },
  {
    productTitle: 'Tino',
    image: require('../assets/product3.png'),
    productId: 3
  },
  {
    productTitle: 'EFG',
    image: require('../assets/product4.png'),
    productId: 4
  },
  {
    productTitle: 'MLI',
    image: require('../assets/product5.png'),
    productId: 5
  },
  {
    productTitle: 'Banans',
    image: require('../assets/product6.png'),
    productId: 6
  },
  {
    productTitle: 'Hehe',
    image: require('../assets/profile.jpg'),
    productId: 7
  }
]

export default {
  getProducts () {
    return _products
  }
}
