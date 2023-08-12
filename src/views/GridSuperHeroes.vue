<template>
  <!-- Esta vista llama al componente GridSuperHeroes el cual es el que hace el llamada al Api -->
  <div class="mt-5">
    <Comp_GridSuperHeroes />
  </div>
</template>

<script>
// importacion del componente que muestra la grilla de los super heroes
import Comp_GridSuperHeroes from "@/components/Comp_GridSuperHeroes.vue";
//importacion del componente de login
import login from "@/views/Login.vue";
//importacion del componente de autenticacion de usuarios
import auth from "@/auth";

export default {
  name: "Home",
  components: {
    Comp_GridSuperHeroes,
    //login
  },
};
</script>
