<!-- /* Vista principal de la aplicacion */ -->
<template>
  
  <div class="home"> 
      <v-layout row wrap justify-center> 
        <v-flex xs12 sm12>
          <v-card color="#CFD8DC">
            <v-card-title><h1>BIENVENIDO A LA VIZUALIZACIÓN DE SUPER HEROES</h1></v-card-title>
            <v-card-text>
            <div  xs12 sm12 >
            <span>Para comenzar por favor inicie session con Usuario= prueba@gmail.com y password = prueba</span>                                
            </div>   
            <br>       
            <v-btn color="red" :to="{name:'login'}" >Ingresar</v-btn>               
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout> 
  </div>

</template>

<script>
// importacion del componente de login
import login from '@/views/Login.vue'
//importacion del componente de autenticacion
import auth from "@/auth";

export default {
  name: 'Home',
  components: {
    login    
  },
  views:{
      login
  },
  computed: {
    //propiedad computada que tra el usuario de la cookie
    userLogged() {
      return auth.getUserLogged();
    }
  }
}
</script>
