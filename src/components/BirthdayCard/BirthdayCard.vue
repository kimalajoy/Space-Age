<template>
  <div class="birthday-card">
    <img v-bind:src="img" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BirthdayCard',
    props: ['birthdayCard'],
    data() {
      console.log('birthdayCard', this.birthdayCard);
      return {
        img: this.birthdayCard.url
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
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
}

.birthday-card img {
  width: 90%;
  padding: 20px 0;
}
</style>
