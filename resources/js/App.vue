<template>
  <div id="app">
    <MessagesComponent/>
  </div>
</template>

<script>
import MessagesComponent from './components/MessagesComponent.vue'

export default {
  name: 'App',
  components: {
      MessagesComponent
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
</style>