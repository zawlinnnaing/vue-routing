<template>
<div class="first-route">
  <h1>Hello : {{ msg }}</h1>
  <!--<h1>Hello : {{ name }}</h1>-->
  {{ $route.params.name }}
</div>
</template>

<script>
export default {
  name: 'FirstRoute',
  // props: ['name'],
  data () {
    return {
      msg: 'First Route'
    }
  }
}
</script>

<style scoped>

</style>
