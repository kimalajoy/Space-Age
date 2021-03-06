import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import CardSection from '../views/CardSection.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: {
      name: "LoginPage"
      }
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/CardSection',
    name: 'CardSection',
    component: CardSection,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
