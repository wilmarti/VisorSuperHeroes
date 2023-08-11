<template>
    <div>
        <h1>LOS MAS VOTADOS</h1>
        <template>
            <v-data-table
            :headers="headers"
            :items="Votaciones"
            :items-per-page="10"
            class="elevation-1"
            ></v-data-table>
        </template>

    </div>
    
</template>

<script>

export default {

    data: () => ({
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'TITLE', value: 'Title' },
          { text: 'ME GUSTA', value: 'NumVotosMeGusta' },
          { text: 'NO ME GUSTA', value: 'NumVotosNoMeGusta' },
            ],
        Votaciones:[],

  }),

  created() {
    this.initialize();  
  },

  methods: {
    async initialize() {
        this.Votaciones = JSON.parse(localStorage.getItem('DatosVotacion'))
        this.Votaciones = this.Votaciones.filter((iten,index) => index <= 10) 
    },


  }
}

</script>