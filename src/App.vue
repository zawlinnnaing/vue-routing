<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/cyborg/bootstrap.min.css">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo.png" width="50" height="50">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
              aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto" v-for="(index,id) in navArray" :key="id">
          <li class="nav-item ">
            <router-link :to="{name: index.name}" class="nav-link">{{ index.title }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="app-container">
      <transition name="moveInUp">
        <router-view>
        </router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navArray: [
        {
          name: 'Home',
          title: 'Home'
        },
        {
          name: 'Blog',
          title: 'Blog'
        },
        {
          name: 'Services',
          title: 'Services'
        },
        {
          name: 'Contact',
          title: 'Contact'
        }
      ]
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .moveInUp-enter-active {
    opacity: 0;
    animation: fadeIn 1s ease-in;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 1;
    }
  }

  .moveInUp-leave-active {
    animation: moveInUp .3s ease-in;
  }

  @keyframes moveInUp {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      -ms-transform: translate(0);
      -o-transform: translate(0);
      transform: translate(0);
    }
    100% {
      transform: translate(-400px);
    }
  }

  div.app-container {
    margin: 1em 0;
  }

  p {
    color: white;
  }
</style>
