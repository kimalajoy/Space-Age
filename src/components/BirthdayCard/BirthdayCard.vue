<template>
  <div class="birthday-card" v-bind:key='birthdayCard.date'>
    <iframe class="card-media" v-if="birthdayCard.media_type === 'video'" :src="birthdayCard.url"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
    />
    <img v-else class="card-media" :src="birthdayCard.url" alt="" />
    <div id="nav-container">
      <div class="button" tabindex="0">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
        <button class="favorite-button"  @click='favoriteCard'>
          <img v-if="isFavorited" :src="require('./active-icon.png')" id="favorite-icon" alt="telescope with filled heart">
          <img v-else :src="require('./non-active-icon.png')" id="favorite-icon" alt="telescope with clear heart">
        </button>

      <div id="nav-content" tabindex="0">
        <h1>{{this.birthdayCard.explanation}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BirthdayCard',
    props: {
      birthdayCard: {
         type: Object
      },
      isFavorited: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      favoriteCard() {
        this.$emit('add-to-favorites', this.birthdayCard.date);
      }
    }
  }
</script>

<style scoped>
.birthday-card {
  border: 1px solid #000000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  height: 90vh;
  justify-content: center;
  position: relative;
  top: 10%;
}

.card-media {
  padding: 25px 0 25px 25px;
  width: 1000px;
}

.button {
  background: transparent;
  border-radius: 0;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: center;
  margin-left: 35px;
  pointer-events: auto;
  position: relative;
  top: 5px;
  touch-action: manipulation;
  width: 30px;
  z-index: 1;
}

.icon-bar {
  background: #aaa;
  display: block;
  height: 3px;
  transition: .3s;
  width: 110%;
}

.icon-bar + .icon-bar {
  margin-top: 5px;
}

#nav-container:focus-within .button {
  pointer-events: none;
}
#nav-container:focus-within .icon-bar:nth-of-type(1) {
  transform: translate3d(0,8px,0) rotate(45deg);
}
#nav-container:focus-within .icon-bar:nth-of-type(2) {
  opacity: 0;
}
#nav-container:focus-within .icon-bar:nth-of-type(3) {
  transform: translate3d(0,-8px,0) rotate(-45deg);
}

#nav-content {
  background: rgba(255, 255, 255, 0.75);
  height: 90%;
  left: 0;
  max-width: 400px;
  opacity: 0;
  overflow-x: scroll;
  padding: 20px;
  pointer-events: auto;
  position: absolute;
  top: 0;
  transform: translateX(-100%);
  transition: all .5s;
  width: 90%;
}

#nav-content:hover {
  background: rgba(255, 255, 255, 0.90);
}

#nav-content h1 {
  font-size: 22px;
}

#nav-container:focus-within #nav-content {
  opacity: 100%;
  transform: none;
}

#favorite-icon {
  margin-top: 10px;
  padding: 0 10px;
  width: 70px;
}

.favorite-button {
  background: transparent;
  border: none;
  margin: 10px 0px 15px 0px;
}

</style>
