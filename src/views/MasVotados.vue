<template>

    <div class="home">  
      <div v-if="userLogged" class="mt-2">
          <Comp_MasVotados/>
      </div>
      <div v-else>
      <br/>
          <login/>
      </div>
  
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Comp_MasVotados from '@/components/Comp_MasVotados.vue'
  import login from '@/views/Login.vue'
  import auth from "@/auth";
/*   import {mapActions, mapMutations, mapState} from 'vuex'; */
//   import store from "../store/index.js";
  
  export default {
    name: 'MasVotados',
    components: {
        Comp_MasVotados,
        login
    },
    views:{
        login
    },
  
    beforeMount() {  
      
  
     const Name = auth.getUserLogged();
     
/*       if(this.userLogged == undefined)
      {
        store.commit('AsignarValorLogin', { ValorLogin: 0, user:'',tipousuario :'' });
      }
      else
      {     
       store.commit('AsignarValorLogin', { ValorLogin: 1, user:Name.username, user:Name.tipousuario });
       store.dispatch('GetDatosPersona',{email:Name.email});
      }  */      
    },
  
    methods: {
/*       ...mapMutations(['AsignarValorLogin']),
      ...mapActions(['GetDatosReferenciaBasica']) */
      
    },
    computed: {
      userLogged() {
        return auth.getUserLogged();
      },
  
/*     ...mapState(['VarLogin','ReferenciaBasica']) */
  }
  }
  </script>