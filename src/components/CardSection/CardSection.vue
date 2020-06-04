<template>
    <div class="card-section">
      <div v-for="(birthdayCard, index) in fetchedData" v-bind:key="index">
        <div v-if="!showOnlyFavorites || (showOnlyFavorites && favorites.includes(birthdayCard.date))">
          <h2 class="greeting-header">This picture was taken on: {{birthdayCard.date}}.</h2>
          <BirthdayCard :birthdayCard="birthdayCard" :isFavorited="favorites.includes(birthdayCard.date)" v-on:add-to-favorites="$emit('add-to-favorites', birthdayCard.date)" />
        </div>
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
      favorites: {
        type: Array,
      },
      showOnlyFavorites: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
.card-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
}

.greeting-header {
  margin: 40px 0px 20px 0px;
  position: relative;
  text-transform: capitalize;
}

</style>
