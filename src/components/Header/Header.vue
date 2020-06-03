<template>
    <div class='header'>
      <div class='logo'>
        <img class='logo-img' src='./Logo.png' alt='planet with a party hat'>
        <h1 class='logo-text'>Space Age</h1>
      </div>
      <form v-if='!isLoggedIn' @submit='getUserInfo' class='login-form'>
          <input v-if='!isLoggedIn' type='text' v-model='name' name='name' required placeholder='name'>
          <input type='date' data-testid='date-input' v-model='dateOfBirth' required name='dateOfBirth'>
          <input type='submit' value='Submit' class='submit-btn'>
      </form>
    <div class='header-btns'>
      <button @click="$emit('showOnlyFavorites', 'beans!')" class="favorite-btn" type="button" name="favorites">
        <img :src="require('./favorite-icon.png')" alt="">
      </button>
      <button v-if="isLoggedIn" @click="$emit('weekData')" type="button" class="weekly-data" name="weekly-data">Show me more!</button>
      <button v-if="isLoggedIn" @click="$emit('newSearch')" type="button" class="new-search" name="new-search">New birthday search</button>
    </div>
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
                this.name = '';
                this.dateOfBirth = '';
            },
        }
    }
</script>

<style scoped>
.header {
  border-bottom: 18px solid #23AAAE;
  background-color: #ffffff;
  display: flex;
  font-weight: bold;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  align-items: center;
}

.logo {
  display: flex;
}

.logo-img {
  margin-top: 1%;
  display: block;
  padding: 0 12px;
  width: 22%;
  position: relative;
  top: 10px;

}

.logo-text {
  font-size: 45px;
  text-transform: uppercase;
  margin: 8% 0px 0px 2%;
}

.favorite-btn {
  background-color: transparent;
  border: none;
}

.favorite-btn img {
  width: 30%;
  position: relative;
  top: 8px;
}

</style>
