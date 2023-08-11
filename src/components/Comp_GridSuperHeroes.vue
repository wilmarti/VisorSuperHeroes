<template>
    <div>
        <h1>Visor de SuperHeroes</h1>

        <v-container grid-list-md>
            <paginate name="Resultado" :list="Resultado" :per="9">
            <v-layout row wrap justify-center>            
               <!--  <v-flex v-for="item in this.Resultado" :key="item.id" xs12 sm4> -->
                <v-flex v-for="item in paginated('Resultado')" :key="item.id" xs12 sm4>
                    <v-card dark
                    class="mx-auto"
                    max-width="500"
                    max-height="500" color="#212121">
                        <!-- <v-img src=´${{item.thumbnail.path}}.${{item.thumbnail.extension}}´ alt=""> -->
                        <v-img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
                            max-height="240"
                            max-width="380"
                            contain
                            class="grey darken-4">
                        </v-img> 

                        <v-card-title>
                            
                            <Scroll-Div width="340px" height="50px">
                                <span class="white--text">{{item.title}}</span>
                            </Scroll-Div> 
                            
                        </v-card-title>

                        <v-card-text >
                            <div  xs12 sm4>
                            <Scroll-Div width="340px" height="100px" xs12 sm4>
                                <span>{{item.description}}</span>                                
                            </Scroll-Div>   
                        </div>                         
                        </v-card-text>


                        <v-card-actions>
                                <v-btn small color="#00695C" @click="AgregarVoto(true,item)" text>Me Gusta</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn small color="#B71C1C" @click="AgregarVoto(false,item)" text>No Me Gusta</v-btn>
                                <v-spacer></v-spacer>
                                <!-- <Comp_DescripcionPersonaje v-on:onClick="handleButtonClick(item)" v-bind:personaje ="EditItem" /> -->
                                <v-btn small color="#FFF9C4" @click="EditarPersonaje(item)" text>Editar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>                    
            </v-layout>
            </paginate>
            <paginate-links for="Resultado" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
        </v-container>

        <!-- <Comp_DescripcionPersonaje numero="10" /> -->
        
    </div>
</template>




<script>
import Vue from 'vue';
import axios from 'axios'
import ScrollDiv from 'vue-scroll-div';
import VuePaginate from 'vue-paginate'
import Comp_DescripcionPersonaje from '@/components/Comp_DescripcionPersonaje.vue'

Vue.use(VuePaginate)
Vue.use(ScrollDiv);

export default {
    components: {
        Comp_DescripcionPersonaje
    },

    data: () => ({
    Resultado:[],
    paginate: ['Resultado'],
    votos:[],
    EditItem:[],
    votosok:[]

  }),

  created() {
    this.initialize(); 
    localStorage.removeItem('vuex')
  },

  methods: {
    async initialize() {
        try{
        await axios.get(process.env.VUE_APP_RUTA_API)
        .then((response) => {
          if (response.data) {
            this.Resultado = response.data.data.results
          } else {
            alert("Error al tratar traer la data");
          }
        });
      }
      catch (error){
        console.log("Error al tratar de trear informacion del api",error)

      }

    },

    /*Funcion que ingresa los votos de megusta a los personajes*/
    AgregarVoto(voto,heroe){

    //Se definen las variables a utilizar en el proceso
    let found =[]
    let TransactionIndexInArray =""

    //Se extrae la informacion cargada en la variable DatosVotacion del Local Storage
    const TotalVotaciones = JSON.parse(localStorage.getItem('DatosVotacion'));

    //Si la variabke del LocalStorage esta vacia se llena con el parametro heroe que recibe la funcion obteniendo el id y el titulo del personaje 
    if(TotalVotaciones !== null){
        //Hace busqueda del personaje al cual le dieron click en la votacion
        found = TotalVotaciones.find((element) => element.id === heroe.id);
                //si el personaje se encuentra en la variable DatosVotacion del LocalStorage se procede a extraer el array
                //luego se elimina del LocalStorage, se actualiza el numero de votos agregando uno y por ultimo se vuelve a cargar
                if(found !== undefined){
                    console.log("found:",found)
                    if(voto === true){
                        found.NumVotosMeGusta = found.NumVotosMeGusta +1
                    }else{
                        found.NumVotosNoMeGusta = found.NumVotosNoMeGusta +1
                    }
                    TransactionIndexInArray = TotalVotaciones.findIndex(element => element.id === heroe.id)
                    TotalVotaciones.splice(TransactionIndexInArray,1)
                    TotalVotaciones.push(found)
                    TotalVotaciones.sort((a, b) => b.NumVotosMeGusta - a.NumVotosMeGusta);
                    localStorage.setItem('DatosVotacion',JSON.stringify(TotalVotaciones))
                    alert("Voto almacenado con éxito")
                }
                //si el personaje no se encontro, se procede a ingresarlo en el LocalStorage
                else{

                    let array={
                        id:heroe.id,
                        Title: heroe.title,
                        NumVotosMeGusta : voto ? 1 : 0 ,
                        NumVotosNoMeGusta : voto ? 0 : 1 ,
                        }

                    console.log("array:", array)
                    TotalVotaciones.push(array)
                    console.log("TotalVotaciones2:", TotalVotaciones) 
                                    
                    localStorage.setItem('DatosVotacion',JSON.stringify(TotalVotaciones))
                    alert("Voto almacenado con éxito")
                    
                }

        }
    //si no hay ninguna votacion  se procede a ingresar el personaje en el LocalStorage
    else {
            this.votos.push({
            id:heroe.id,
            Title: heroe.title,
            NumVotosMeGusta : voto ? 1 : 0 ,
            NumVotosNoMeGusta : voto ? 0 : 1 ,
            })
   
        localStorage.setItem('DatosVotacion',JSON.stringify(this.votos))
        alert("Voto almacenado con éxito")
    }

},

    EditarPersonaje(Item){
        localStorage.setItem('DatosEdicion',JSON.stringify(Item))
        this.$router.push("/personajes").catch(()=>{});
    }
  }
}

</script>