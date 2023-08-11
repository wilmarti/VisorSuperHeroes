<template>

  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <router-link to="/">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="80"
          src="./assets/marvel-logo.jpg"
          width="80"
        />
      </router-link>
          
      
      <b-container >

          
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-navbar-brand> <FONT COLOR="red">Prueba Tecnica Full Stack DENTSU CREATIVE- MARVEL </FONT></b-navbar-brand>
            
            <b-collapse is-nav id="nav-collapse" >
                <b-navbar-nav>

                  <v-btn small class="blue darken-1" :to="{name:'masvotados'}">
                    <v-icon>mdi-account</v-icon> Ver los 10 mas votados: 
                  </v-btn>


                </b-navbar-nav>    
            </b-collapse>
          </b-container>


    </b-navbar>

   <b-container>
     <router-view/>
   </b-container>
  

  </div>
</template>




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

#red{
  font-weight: bold;
  color: red;
}

</style>
