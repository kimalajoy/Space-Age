<template>
  <div>
    <div class="card-section" v-bind:key="index">
      <BirthdayCard v-bind:birthdayCard="fetchedData" />
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
    props: ['fetchedData']
  }
</script>

<style scoped>
.card-section {
  height: 65vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

</style>
