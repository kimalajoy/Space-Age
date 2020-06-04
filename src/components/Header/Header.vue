<template>
  <div class='header'>
    <div class='logo'>
      <img class='logo-img' src='./Logo.png' alt='planet with a party hat'>
      <div class='header-text'>
        <h1 class='logo-text'>Space Age</h1>
        <h4 class='sub-header-text'>A birthday app for kids and young adults</h4>
      </div>
    </div>
    <form v-if='!isLoggedIn' @submit='getUserInfo'>
        <input v-if='!isLoggedIn' type='text' v-model='name' name='name' required placeholder='Name'>
        <input type='date' min="1995-06-21" data-testid='date-input' v-model='dateOfBirth' required name='dateOfBirth'>
        <input type='submit' value='Submit' class='submit-btn'>
    </form>
    <div class='header-btns-container'>
      <button v-if="isLoggedIn" @click="$emit('weekData')" type="button" class="header-btns weekly-data" name="weekly-data">Show me more!</button>
      <button v-if="isLoggedIn" @click="$emit('newSearch')" type="button" class="header-btns new-search" name="new-search">New birthday search</button>
    </div>
    <div v-if="isLoggedIn" class="greeting-msg">
      <h1 class="greeting-header">Welcome {{this.name}}!</h1>
    </div>
    <button @click="$emit('showOnlyFavorites', 'beans!')" class="favorite-btn" type="button" name="favorites">
      <img :src="require('./favorite-icon.png')" alt="">
    </button>
  </div>
</template>

<script>

    export default {
        name: 'Header',
        data() {
            return {
                name: '',
                dateOfBirth: '',
            }
        },
        props: {
          isLoggedIn: {
            type: Boolean,
          }
        },
        methods: {
            getUserInfo(e) {
                e.preventDefault()
                const newUser = {
                    id: Date.now(),
                    name: this.name,
                    dateOfBirth: this.dateOfBirth,
                }
                this.$emit('login-handler', newUser);
                // this.name = '';
                // this.dateOfBirth = '';
            },
        }
    }
</script>

<style scoped>
.header {
  align-items: center;
  background-color: #ffffff;
  border-bottom: 18px solid #23AAAE;
  display: flex;
  font-weight: bold;
  height: 100px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}

.header-text {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.logo {
  display: flex;
}

.sub-header-text {
  font-size: 12px;
  margin: 0px;
  padding-left: 10px;
  text-transform: uppercase;
}

.logo-img {
  display: block;
  margin-top: 1%;
  padding: 0 12px;
  position: relative;
  top: 10px;
  width: 20%;
}

.logo-text {
  font-size: 42px;
  margin: 8% 0px 0px 2%;
  text-transform: uppercase;
}

form {
  align-self: flex-end;
  bottom: 13px;
  display: flex;
  flex-direction: column;
  left: 35%;
  position: absolute;
}

form input {
  margin: 2px;
}

.submit-btn {
  background: #FEB860;
  border: 1px solid #FEB860;
}

.favorite-btn {
  background-color: transparent;
  border: none;
  bottom: 10px;
  position: absolute;
  right: 0;
}

.favorite-btn img {
  left: 90px;
  position: relative;
  top: 8px;
  width: 30%;
}

.greeting-msg {
  bottom: 5px;
  position: absolute;
  right: 10%;
}

.header-btns-container {
  display: flex;
}

.header-btns {
  background: #FEB860;
  border-radius: 5%;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  color: #000000;
  cursor: pointer;
  font-size: 14px;
  height: 50px;
  margin: 0% 3%;
  position: relative;
  right: 43%;
  text-decoration: none;
  text-transform: uppercase;
  width: 200px;
}

.header-btns:hover {
  background: #ffffff;
  border-radius: 5px;
  border: 4px solid #FEB860;
}


</style>
