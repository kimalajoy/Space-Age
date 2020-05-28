<template>
  <div id="app">
    <LoginPage v-on:login-handler='loginUser'/>
    <router-view/>
  </div>
</template>

<script>
import LoginPage from '../components/LoginPage.vue'

export default {
  name: 'Home',
  components: {
    LoginPage
  },
  data() {
    return {
        userInfo: {
          name: '',
          dateOfBirth: '',
        },
        isLoggedIn: false,
    }
  },
  methods: {
    loginUser(newUser) {
      this.userInfo = {...newUser};
      this.isLoggedIn = true;
      // this.userInfo.name = name;
      // this.userInfo.dateOfBirth = dateOfBirth;
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
