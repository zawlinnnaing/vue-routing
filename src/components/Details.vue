<template>
  <div class="details">
    <div class="container">
      <h4>{{title}}</h4>
      <div class="container">
        <div class="row">
          <div class="col-md-12" v-for="(product,index) in products" :key="index">
            <div v-if="product.productId === Number(pid)">
              <img :src="product.image" class="img-fluid detail-img " :alt="product.title">
              <h5>{{product.productTitle}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    pid: {
      type: String
      // default: 'none'
    }
  },
  data () {
    return {
      title: 'Details'
      // pid: route.params.default,}
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts: function () {
      this.$store.dispatch('fetchProducts')
      console.log(this.products)
    }
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<style scoped>
  .detail-img {
    margin: 1em 0;
  }
</style>
