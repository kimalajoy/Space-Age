<template>
    <div class='header'>
      <div class='logo'>
        <img class='logo-img' src='./Logo.png' />
        <h1 class='logo-text'>Space Age</h1>
      </div>
      <form @submit='getUserInfo' class='login-form'>
          <input type='text' v-model='name' name='name' required placeholder='name'>
          <input type='date' v-model='dateOfBirth' required name='dateOfBirth'>
          <!-- <input v-if="isLoggedIn" type='date' v-model='secondDate' required name='secondDateInput' > -->
          <input type='submit' value='Submit' class='btn'>
      </form>
    <div class='header-btns'>
      <button class="favorite-btn" type="button" name="favorites">
        <img :src="favoriteIcon" alt="">
      </button>
      <button v-if="isLoggedIn" @click="$emit ('weekData')" type="button" name="weekly-data">Show me more!</button>
    </div>
  </div>
</template>

<script>
  import favoriteIcon from './favorite-icon.png';

    export default {
        name: 'LoginPage',
        data() {
            return {
                name: '',
                dateOfBirth: '',
                favoriteIcon: favoriteIcon,
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
            }
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
  /* justify-content: space-between; */
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
