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
          <img v-if="isFavorited" :src='activeImg' id="favorite-icon" alt="telescope with filled heart">
          <img v-else :src='nonActiveImg' id="favorite-icon" alt="telescope with clear heart">
        </button>

      <div id="nav-content" tabindex="0">
        <h1>{{this.birthdayCard.explanation}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import nonActiveImg from './non-active-icon.png';
  import activeImg from './active-icon.png';

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
    data() {
      return {
        nonActiveImg: nonActiveImg,
        activeImg: activeImg,
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
  width: 80%;
  height: 90vh;
  display: flex;
  justify-content: center;
  position: relative;
  top: 10%;
  /* left: 10%; */
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
}

.card-media {
  width: 90%;
  padding: 25px 0 25px 25px;
}

.button {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  border: 0;
  background: transparent;
  border-radius: 0;
  height: 70px;
  width: 30px;
  cursor: pointer;
  pointer-events: auto;
  top: 5px;
  margin-left: 35px;
  touch-action: manipulation;
}

.icon-bar {
  display: block;
  width: 110%;
  height: 3px;
  background: #aaa;
  transition: .3s;
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
  opacity: 0;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  position: absolute;
  top: 0;
  left: 0;
  height: 90%;
  background: rgba(255, 255, 255, 0.75);
  pointer-events: auto;
  transform: translateX(-100%);
  transition: all .5s;
  overflow-x: scroll;
}

#nav-content:hover {
  background: rgba(255, 255, 255, 0.90);
}

#nav-content h1 {
  font-size: 22px;
}

#nav-container:focus-within #nav-content {
  transform: none;
  opacity: 100%;
}

#favorite-icon {
  width: 70px;
  padding: 0 10px;
  margin-top: 10px;
}

.favorite-button {
  border: none;
  background: transparent;
  margin: 10px 0px 15px 0px;
}

</style>
