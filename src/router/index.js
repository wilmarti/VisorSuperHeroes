import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

process.env.ApiUrl= "http://localhost:3000/api/" 

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    //component: Home
    component: () => import( '../views/Home.vue')
  },

   {
    path: '/cerrar',
    name: 'cerrar',
    component: () => import( '../views/Cerrar.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'gridsuperheroes',
    component: () => import('../views/GridSuperHeroes.vue')
  },
  {
    path: '/personajes',
    name: 'personajes',
    component: () => import('../components/Comp_DescripcionPersonaje.vue')
  },
  {
    path: '/masvotados',
    name: 'masvotados',
    component: () => import('../components/Comp_MasVotados.vue')
  },



]



Vue.config.productionTip = false;

/* new Vue({
  router,
  render: h => h(App)
}).$mount("#app"); */


const router = new VueRouter({
  routes
})

export default router
