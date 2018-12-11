import Vue from 'vue'
import Vuex from 'vuex'
import products from '../api/products'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    products: []
  },
  getters: {},
  actions: {
    fetchProducts ({commit}) {
      let items = products.getProducts()
      commit('setProducts', items)
    }
  },
  mutations: {
    setProducts (state, products) {
      state.products = products
    }
  }
})
