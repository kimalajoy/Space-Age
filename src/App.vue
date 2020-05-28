<template>
  <div id="app">
    <LoginPage v-on:login-handler='loginUser'/>
  </div>
</template>

<script>

import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    LoginPage
  },
  data() {
    return {
        userInfo: {
          name: '',
          dateOfBirth: ''
        }
    }
  },
  methods: {
    loginUser(newUser) {
      this.userInfo = {newUser}
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
