import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    

  },
  computed:{
    nombre:''
  },
  mutations: {
    prueba(state,index){     
      this.state.participante[index].nota ++
    },
    filtro:function(){
      this.state.participante.filter(
        item => {
          return index.nota > 2
        }
      )
    },

    
  },
  actions: {
  },
  modules: {
  }
})
