<template>
  <div>
    <div class="card-section" v-bind:key="index" v-for="(birthdayCard, index) in fetchedData">
      <BirthdayCard v-bind:birthdayCard="birthdayCard" />
    </div>
  </div>
</template>

<script>
import BirthdayCard from './BirthdayCard.vue';

  export default {
    name: 'CardSection',
    components: {
      BirthdayCard
    },
    props: ['fetchedData']
  }
</script>

<style scoped>

</style>
