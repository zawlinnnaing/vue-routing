<template>
  <div class="service-language">
    <div v-if="language === 'vuejs'">
      <iframe src="https://vuejs.org/v2/guide/index.html"></iframe>
    </div>
    <div v-else-if="language === 'laravel'">
      <iframe src="https://laravel.com/"></iframe>
    </div>
    <div v-else-if = "language === 'vuex'">
      <iframe src="https://vuex.vuejs.org/"></iframe>
    </div>
    <div v-else>
    <not-found></not-found>
    </div>
  </div>
</template>

<script>
import NotFound from './NotFound'
export default {
  name: 'ServiceChild',
  components: {NotFound},
  props: {
    language: {
      type: String
    }
  }
}
</script>

<style scoped>
  .service-language {
    margin: 2rem 0;
  }

  .service-language iframe {
    width: 100%;
    height: 100vh;
  }
</style>
