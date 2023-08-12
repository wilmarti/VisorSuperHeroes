<!-- vita que llama a el componente de grilla de super heroes lo deja pasar siempre y cuando este logueado correctamente -->
<template>
  <div class="home">
    <div v-if="userLogged" class="mt-2">
      <Comp_GridSuperHeroes />
    </div>
    <div v-else>
      <br />
      <Home />
    </div>
  </div>
</template>

<script>
// importación de componentes
import Comp_GridSuperHeroes from "@/components/Comp_GridSuperHeroes.vue";
import Home from "@/views/Home.vue";
import auth from "@/auth";
/*   import {mapActions, mapMutations, mapState} from 'vuex'; */
//   import store from "../store/index.js";

export default {
  name: "MasVotados",
  components: {
    Comp_GridSuperHeroes,
    Home,
  },
  views: {
    Home,
  },

  beforeMount() {
    //metodo utilizada para traer los datos del usuario antes de cargar e componente
    const Name = auth.getUserLogged();
  },

  computed: {
    userLogged() {
      //metodo utilizado para traer los datos del usuario de la cookie
      return auth.getUserLogged();
    },
  },
};
</script>
