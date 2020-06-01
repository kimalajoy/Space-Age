<template>
  <div id="app">
    <!-- <div id='nav'> -->
      <LoginPage :isLoggedIn= 'isLoggedIn' v-on:login-handler='loginUser'/>
      <CardSection v-if='isLoggedIn' v-bind:userInfo= 'userInfo' v-bind:fetchedData="fetchedData"/>
      <!-- <router-link v-if='isLoggedIn' to='/LoginPage' v-on:click.native="logout()" replace>Logout</router-link> -->
    <!-- </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import LoginPage from './components/LoginPage/LoginPage.vue';
import CardSection from './components/CardSection/CardSection.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    CardSection
  },
  data() {
    return {
        userInfo: {
          name: '',
          dateOfBirth: '',
        },
        isLoggedIn: false,
        fetchedData: []
    }
  },
  mounted() {
    // if(!this.isLoggedIn) {
    //   this.$router.replace({ name: 'LoginPage' });
    // } else {
    // }
  },
  methods: {
    loginUser(newUser) {
      this.userInfo = {...newUser};
      this.isLoggedIn = true;
      this.fetchData();
    },
    fetchData: async function () {
      const myRequest = `https://api.nasa.gov/planetary/apod?api_key=7dHxD8NJ7xkw5dxFuwR40aHbY6P1umxdxD0d48Oz&date=${this.userInfo.dateOfBirth}`

    await fetch(myRequest)
      .then((res) => { return res.json() })
      .then((data) => {
        this.fetchedData = data
      })
      .catch(err => { console.error(err); });
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
</style>
