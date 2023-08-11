<template>
    <!-- Esta vista llama al componente GridSuperHeroes el cual es el que hace el llamada al Api -->
    <div  class="mt-5">
        <Comp_GridSuperHeroes/>          
    </div>
  
  </template>

<script>
// @ is an alias to /src
import Comp_GridSuperHeroes from '@/components/Comp_GridSuperHeroes.vue'
import login from '@/views/Login.vue'
import auth from "@/auth";

export default {
  name: 'Home',
  components: {
    Comp_GridSuperHeroes,
    //login    
  },

}
</script>