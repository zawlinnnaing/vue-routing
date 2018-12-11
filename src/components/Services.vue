<template>
  <div class="services container">
    <h4>{{ title }}</h4>
    <div class="row">
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Vue Js</h5>
            <p class="card-text">Vue (pronounced /vjuː/, like view) is a progressive framework for building user
              interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally
              adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with
              other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering
              sophisticated Single-Page Applications when used in combination with modern tooling and supporting
              libraries.</p>
            <router-link :to="{name: 'servicesChild' , params :{language : 'vuejs'}}" class="btn btn-primary">Go to
              Vue
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Laravel</h5>
            <p class="card-text">Love beautiful code? We do too.
              The PHP Framework For Web Artisans</p>
            <router-link :to="{name: 'servicesChild', params: {language: 'laravel'}}" class="btn btn-primary">Laravel
              Doc
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Vuex</h5>
            <p class="card-text">Vuex is a state management pattern + library for Vue.js applications. It serves as a
              centralized store for all the components in an application, with rules ensuring that the state can only be
              mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide
              advanced features such as zero-config time-travel debugging and state snapshot export / import.
            </p>
            <router-link :to="{name: 'servicesChild' , params : {language: 'vuex'}}" class="btn btn-primary">Vuex</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      title: 'Services'
    }
  }
}
</script>

<style scoped>
  .card-title {
    color: #eeeeee;
  }
</style>
