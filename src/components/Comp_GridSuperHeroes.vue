<!-- Este componente es el que permite la visualización de los super heroes renderizando las caracteristicas principales, en tarjetas
    que contienen la image, el titulo, a descripcion y los botones de accion para me gusta y no me gusta.-->
<template>
  <div>
    <h1>Visor de SuperHeroes</h1>

    <v-container grid-list-md>
      <paginate name="Resultado" :list="Resultado" :per="9">
        <v-layout row wrap justify-center>
          <!--  <v-flex v-for="item in this.Resultado" :key="item.id" xs12 sm4> -->
          <v-flex
            v-for="item in paginated('Resultado')"
            :key="item.id"
            xs12
            sm4
          >
            <v-card
              dark
              class="mx-auto"
              max-width="500"
              max-height="500"
              color="#212121"
            >
              <!-- <v-img src=´${{item.thumbnail.path}}.${{item.thumbnail.extension}}´ alt=""> -->
              <v-img
                :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
                max-height="240"
                max-width="380"
                contain
                class="grey darken-4"
                @click="EditarPersonaje(item)"
              >
              </v-img>

              <v-card-title>
                <Scroll-Div width="340px" height="50px">
                  <span class="white--text">{{ item.title }}</span>
                </Scroll-Div>
              </v-card-title>

              <v-card-text>
                <div xs12 sm4>
                  <Scroll-Div width="340px" height="100px" xs12 sm4>
                    <span>{{ item.description }}</span>
                  </Scroll-Div>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  small
                  color="#00695C"
                  @click="AgregarVoto(true, item)"
                  text
                  >Me Gusta</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                  small
                  color="#B71C1C"
                  @click="AgregarVoto(false, item)"
                  text
                  >No Me Gusta</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </paginate>
      <paginate-links
        for="Resultado"
        :classes="{ ul: 'pagination', li: 'page-item', a: 'page-link' }"
      ></paginate-links>
    </v-container>

    <!-- <Comp_DescripcionPersonaje numero="10" /> -->
  </div>
</template>

<script>
//importacion de librerias necesarias para el desarrollo del componente
import Vue from "vue";
//Libreria para hacer llamados al api
import axios from "axios";
//libreria para ayudar con el scroll en las tarjetas de los personajes, cuando el texto es demasiado grande
import ScrollDiv from "vue-scroll-div";
//libreria para ayudar con la paginacion de las tarjetas
import VuePaginate from "vue-paginate";
//importacion del componente
import Comp_DescripcionPersonaje from "@/components/Comp_DescripcionPersonaje.vue";
import auth from "@/auth";

Vue.use(VuePaginate);
Vue.use(ScrollDiv);

export default {
  components: {
    Comp_DescripcionPersonaje,
  },

  data: () => ({
    Resultado: [],
    paginate: ["Resultado"],
    votos: [],
    EditItem: [],
    votosok: [],
  }),

  created() {
    this.initialize();
    localStorage.removeItem("vuex");
  },

  methods: {
    //Metodo encargado de inicializar los vaores del componente
    async initialize() {
      try {
        const Key = "Bearer " + auth.getUserLogged().token;
        await axios
/*           .get(process.env.VUE_APP_RUTA_API, {
            headers: {
              Authorization: Key,
            },
          }) */
          .get(process.env.VUE_APP_RUTA_API)
          .then((response) => {
            if (response.data) {
              this.Resultado = response.data.data.results;
            } else {
              alert("Error al tratar traer la data");
            }
          });
      } catch (error) {
        console.log("Error al tratar de trear informacion del api", error);
      }
    },

    /*Metodo que ingresa los votos de megusta a los personajes*/
    AgregarVoto(voto, heroe) {
      //Se definen las variables a utilizar en el proceso
      let found = [];
      let TransactionIndexInArray = "";

      //Se extrae la informacion cargada en la variable DatosVotacion del Local Storage
      const TotalVotaciones = JSON.parse(localStorage.getItem("DatosVotacion"));

      //Si la variabke del LocalStorage esta vacia se llena con el parametro heroe que recibe la funcion obteniendo el id y el titulo del personaje
      if (TotalVotaciones !== null) {
        //Hace busqueda del personaje al cual le dieron click en la votacion
        found = TotalVotaciones.find((element) => element.id === heroe.id);
        //si el personaje se encuentra en la variable DatosVotacion del LocalStorage se procede a extraer el array
        //luego se elimina del LocalStorage, se actualiza el numero de votos agregando uno y por ultimo se vuelve a cargar
        if (found !== undefined) {
          if (voto === true) {
            found.NumVotosMeGusta = found.NumVotosMeGusta + 1;
          } else {
            found.NumVotosNoMeGusta = found.NumVotosNoMeGusta + 1;
          }
          TransactionIndexInArray = TotalVotaciones.findIndex(
            (element) => element.id === heroe.id
          );
          //se elimina el indice consultado
          TotalVotaciones.splice(TransactionIndexInArray, 1);
          // se agrega a el objeto ya modificado, es decir con el voto extra
          TotalVotaciones.push(found);
          //se realiza ordenacion del array en forma descedente osea de mayor a menor
          TotalVotaciones.sort((a, b) => b.NumVotosMeGusta - a.NumVotosMeGusta);
          //Se actualiza lavariable en el local storage
          localStorage.setItem(
            "DatosVotacion",
            JSON.stringify(TotalVotaciones)
          );
          alert("Voto almacenado con éxito");
        }
        //si el personaje no se encontro, se procede a ingresarlo en el LocalStorage
        else {
          let array = {
            id: heroe.id,
            Title: heroe.title,
            NumVotosMeGusta: voto ? 1 : 0,
            NumVotosNoMeGusta: voto ? 0 : 1,
          };

          // se agrega a el objeto porque si entro por aqui significa que no ha sido votado
          TotalVotaciones.push(array);

          //Se actualiza lavariable en el local storage
          localStorage.setItem(
            "DatosVotacion",
            JSON.stringify(TotalVotaciones)
          );
          //mensaje de confirmacion por pantalla
          alert("Voto almacenado con éxito");
        }
      }
      //si no hay ninguna votacion  se procede a ingresar el personaje en el LocalStorage
      else {
        this.votos.push({
          id: heroe.id,
          Title: heroe.title,
          NumVotosMeGusta: voto ? 1 : 0,
          NumVotosNoMeGusta: voto ? 0 : 1,
        });

        //Se actualiza lavariable en el local storage
        localStorage.setItem("DatosVotacion", JSON.stringify(this.votos));
        //mensaje de confirmacion por pantalla
        alert("Voto almacenado con éxito");
      }
    },

    //Metodo que sirve para enrutar hacia la edicion de los personajes
    EditarPersonaje(Item) {
      localStorage.setItem("DatosEdicion", JSON.stringify(Item));
      this.$router.push("/personajes").catch(() => {});
    },
  },
};
</script>
