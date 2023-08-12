<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <router-link to="/marvel">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="80"
          src="./assets/marvel-logo.jpg"
          width="80"
        />
      </router-link>

      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand>
          <FONT COLOR="red">DENTSU CREATIVE- MARVEL </FONT></b-navbar-brand
        >

        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <v-btn small class="blue darken-1" :to="{ name: 'masvotados' }">
              <v-icon>mdi-account</v-icon> Ver los 10 mas votados:
            </v-btn>

            <v-spacer>...</v-spacer>

            <v-btn
              :to="{ name: 'login' }"
              small
              class="blue lighten-4 red--text"
            >
              <span class="mr-2">Login</span>
              <v-icon>mdi-login</v-icon>
            </v-btn>

            <v-spacer>...</v-spacer>

            <v-btn small @click="cerrarSession()" class="dark">
              <span class="mr-2">Cerrar Sesión</span>
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import auth from "@/auth";
import store from "./store/index.js";
/* import {mapMutations, mapState} from 'vuex'; */

export default {
  name: "App",

  data: () => ({
    //
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {

    async cerrarSession() {
      try {
        //pruebas del token en la cookie
        const ppp = auth.getUserLogged();
        console.log("auth.getUserLogged:", ppp);
        await auth.deleteUserLogged();

        // this.$router.replace("/login")
        this.$router.push("/login").catch(() => {});
      } catch (error) {
        console.log(error);
      }
    },

  },
  computed: {
    userLogged() {
      //metodo utilizado para extraer las variables del usuario de la cookie
      return auth.getUserLogged();
    },


  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#red {
  font-weight: bold;
  color: red;
}
</style>
