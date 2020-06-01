<template>
  <div>
    <div v-for="birthdayCard in fetchedData" v-bind:key="birthdayCard.date" class="card-section">
      <h1 class="greeting-header">Welcome {{userInfo.name}}!</h1>
      <h2 class="greeting-header">This picture was taken on: {{userInfo.dateOfBirth}}.</h2>
      <BirthdayCard v-bind:birthdayCard="birthdayCard" v-on:add-to-favorites="$emit('add-to-favorites', fetchedData.date)" v-bind:isFavorited="isFavorited" />
    </div>
  </div>
</template>
<script>
import BirthdayCard from '../BirthdayCard/BirthdayCard.vue';

  export default {
    name: 'CardSection',
    components: {
      BirthdayCard
    },
    props: {
      fetchedData: {
        type: Array,
      },
      userInfo: {
        type: Object,
      },
      isFavorited: {
        type: Boolean
      }
    }
  }
</script>

<style scoped>
.card-section {
  height: 95vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.greeting-header {
  margin-bottom: 0;
  position: relative;
  top: 45px;
  text-transform: capitalize;
}

</style>

<!-- add favorites array to props - should take the date for later rendering -->
<!-- isFavorite = true/false in props -->

<!-- on favorite button on card: v-on:click='isFavorite = !isFavorite' -->
<!-- this should toggle the images? v-show='isFavorite' -->

<!-- methods: if button is clicked add current image to addFavorites array in props and -->

<!-- how are we going to show multiple images for the favorites? Multiple fetches with each date? -->
