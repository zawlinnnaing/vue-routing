<template>
  <div class="home">
    <h4>{{ msg }}</h4>

    <div class="row">
      <div class="col-md-4 col-lg-4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid" width="200" height="200">
        <h4 @click="goToDetail(data.productId)">{{ data.productTitle }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Products'
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    goToDetail (productId) {
      this.$router.push({name: 'Details', params: {pid: productId}})
    },
    fetchProducts: function () {
      this.$store.dispatch('fetchProducts')
      console.log(this.products)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
