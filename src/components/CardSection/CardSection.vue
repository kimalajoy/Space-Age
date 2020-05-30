<template>
  <div>
    <div class="card-section" v-bind:key="index">
     <h1 class="greeting-header">Welcome {{userInfo.name}}!</h1>
     <h2 class="greeting-header">This picture was taken on: {{userInfo.dateOfBirth}}.</h2>
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
    props: {
      fetchedData: {
        type: Array,
      },
      userInfo: {
        type: Object,
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
