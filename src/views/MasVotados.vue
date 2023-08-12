<!-- componente que lista los 10 super heroes mas votados -->
<template>
  <div class="home">
    <div v-if="userLogged" class="mt-2">
      <Comp_MasVotados />
    </div>
    <div v-else>
      <br />
      <login />
    </div>
  </div>
</template>

<script>
// importacion de componentes y utilidades
import Comp_MasVotados from "@/components/Comp_MasVotados.vue";
import login from "@/views/Login.vue";
import auth from "@/auth";

export default {
  name: "MasVotados",
  components: {
    Comp_MasVotados,
    login,
  },
  views: {
    login,
  },

  beforeMount() {
    //metodo utilizado para extraer las variables del usuario de la cookie
    const Name = auth.getUserLogged();
  },

  computed: {
    userLogged() {
      //metodo utilizado para extraer las variables del usuario de la cookie
      return auth.getUserLogged();
    },

  },
};
</script>
