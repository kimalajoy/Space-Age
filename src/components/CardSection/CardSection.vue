<template>
  <div>
    <div class="card-section" v-for='(birthdayCard, index) in fetchedData' v-bind:key='index'>
      <h1 class="greeting-header">Welcome {{userInfo.name}}!</h1>
      <h2 class="greeting-header">This picture was taken on: {{birthdayCard.date}}.</h2>
      <BirthdayCard v-bind:birthdayCard="birthdayCard" v-on:add-to-favorites="$emit('add-to-favorites', birthdayCard.date)" v-bind:isFavorited="isFavorited"/>
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
