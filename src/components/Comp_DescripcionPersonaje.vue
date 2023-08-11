<!-- Este componente es el que permite la visualización de las caracteristicas internas de cada personaja  
     se listan las caracteristicas mas relevante a modo de prueba un una vista sencilla, sin embargo los datos 
     que pinta, los toma desde la variable DatosEdicion desde el local Storage-->

<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm4>
        <v-card dark>
          <v-img
            :src="
              `${this.DatoSuperHeroe.thumbnail.path}.${this.DatoSuperHeroe.thumbnail.extension}`
            "
            max-height="340"
            max-width="480"
            contain
          >
          </v-img>

          <v-card-title>
            <Scroll-Div width="340px" height="50px">
              <span class="white--text">{{ this.DatoSuperHeroe.title }}</span>
            </Scroll-Div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm8>
        <template>
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col no-gutters sm="12">
                <v-card
                  class="pa-2"
                  outlined
                  style="background-color: lightgrey;"
                  tile
                >
                  <h3>RESUMEN CARACTERISTICAS DEL PERSONAJE</h3>
                </v-card>

                <v-row no-gutters>
                  <v-col no-gutters cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      Id
                    </v-card>
                  </v-col>
                  <v-col no-gutters cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.id }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col no-gutters cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      Title
                    </v-card>
                  </v-col>
                  <v-col no-gutters cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.title }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col no-gutters cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      Character collectionURI
                    </v-card>
                  </v-col>
                  <v-col no-gutters cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.characters.collectionURI }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      Creators collectionURI
                    </v-card>
                  </v-col>
                  <v-col cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.characters.collectionURI }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      Description
                    </v-card>
                  </v-col>
                  <v-col cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.description }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      Format
                    </v-card>
                  </v-col>
                  <v-col cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.format }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      Images
                    </v-card>
                  </v-col>
                  <v-col cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.thumbnail.path }}.{{
                        this.DatoSuperHeroe.thumbnail.extension
                      }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      UPC
                    </v-card>
                  </v-col>
                  <v-col cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.upc }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      URL
                    </v-card>
                  </v-col>
                  <v-col cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.urls[0].url }}
                    </v-card>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8" sm="6">
                    <v-card class="pa-2" tile>
                      variantDescription
                    </v-card>
                  </v-col>
                  <v-col cols="4" sm="6">
                    <v-card class="pa-2" tile>
                      {{ this.DatoSuperHeroe.urls.variantDescription }}
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <div class="text-center">
        <v-btn class="ma-2" outlined color="indigo" :to="{name:'gridsuperheroes'}">
          REGRESAR A PRINCIPAL
        </v-btn>
      </div>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "CompDescripcionPersonaje",
  data: () => ({
    DatoSuperHeroe: [],
  }),
  created() {
    //Extrae los datos desde la variable DatosEdicion del localStorage del navegador
    this.DatoSuperHeroe = JSON.parse(localStorage.getItem("DatosEdicion"));
  },
};
</script>
