<!-- Este componente es el encargado de realizar el cierre de la session -->
<template>
  <div class="home">
    <div class="mt-5">
      <h3>Sesión Cerrada</h3>
      {{ confirmation() }}
    </div>
  </div>
</template>

<script>
// iportacion del componente login
import login from "@/views/Login.vue";
//importación de la libreria auth para autenticacion de usuarios por token
import auth from "@/auth";

export default {
  name: "Cerrar",
  views: {
    login,
  },
  data() {
    return {
      mensaje: "",
    };
  },

  methods: {
    //Metodo utilizado para la confirmación de la eliminacion de la sesion
    fnConfirmarEliminar(strMensaje) {
      if (confirm(strMensaje)) {
        this.userLogged();
        return true;
      } else {
        return false;
      }
    },
    //computed: {
    userLogged() {
      return auth.deleteUserLogged();
    },
    confirmation() {
      return this.fnConfirmarEliminar("¿ Está seguro de cerrar la sesion ?");
    },
    //},
  },
};
</script>
