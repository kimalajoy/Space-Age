<template>
  <div id="app">
    <!-- <div id='nav'> -->
      <LoginPage :isLoggedIn= 'isLoggedIn' v-on:login-handler='loginUser' v-on:newSearch='resetUserSearch' v-on:weekData='fetchWeeklyData'/>
      <CardSection :userInfo='userInfo' :fetchedData="fetchedData" v-on:add-to-favorites="favoriteImage"/>
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
        fetchedData: [],
        favorites: [],
        // isFavorited: false
    }
  },
  methods: {
    loginUser(newUser) {
      this.userInfo = {...newUser};
      this.isLoggedIn = true;
      this.favorites = [];
      this.fetchData();
    },
    fetchData: async function () {
      const myRequest = `https://api.nasa.gov/planetary/apod?api_key=7dHxD8NJ7xkw5dxFuwR40aHbY6P1umxdxD0d48Oz&date=${this.userInfo.dateOfBirth}`

    await fetch(myRequest)
      .then((res) => { return res.json() })
      .then((data) => {
        this.fetchedData = [...this.fetchedData, data];
      })
      .catch(err => { console.error(err); });
    },
    favoriteImage(date) {
      let filteredArray = [];
      if (this.favorites.includes(date)) {
        filteredArray = this.favorites.filter(favorite => favorite !== date
        )
        this.favorites = filteredArray;
        this.isFavorited = false
      } else {
        this.favorites.push(date)
        this.isFavorited = true
       }
     },
     // findFavorites() {
     //   const favoriteCardDates = this.favorites;
     //   const favoriteCardsToDisplay = favoriteCardDates.forEach(favorite => {
     //     const filteredArray = [];
     //
     //
     //   })
     // },
     fetchWeeklyData() {
       const givenDate = this.userInfo.dateOfBirth;
       const startDate = new Date(givenDate);
       const endDate = startDate.setDate(startDate.getDate() + 7);
       const myDate = new Date(endDate);

        const dateString = `${myDate.getFullYear()}-${('0' + (myDate.getMonth()+1)).slice(-2)}-${('0' + myDate.getDate()).slice(-2)}`;

       fetch(`https://api.nasa.gov/planetary/apod?api_key=7dHxD8NJ7xkw5dxFuwR40aHbY6P1umxdxD0d48Oz&start_date=${givenDate}&end_date=${dateString}`)
        .then(res => { return res.json(); })
        .then(data => { this.fetchedData = data; })
        .catch(err => { console.error(err);
      });
    },
    resetUserSearch() {
      this.userInfo.name = '';
      this.userInfo.dateOfBirth = '';
      this.isLoggedIn = false;
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
