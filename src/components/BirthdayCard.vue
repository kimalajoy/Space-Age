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
        img: this.birthdayCard.hdurl
      }
    }
  }
</script>

<style scoped>

</style>
