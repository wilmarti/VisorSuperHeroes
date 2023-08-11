<template>
  
  <div class="home"> 
         
  </div>

</template>

<script>

import login from '@/views/Login.vue'
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
    userLogged() {
      return auth.getUserLogged();
    }
  }
}
</script>
