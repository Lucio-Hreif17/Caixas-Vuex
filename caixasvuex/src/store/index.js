import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    caixinhas: [{
      titulo: "1",
      cor: "background: orange"
    }, {
      titulo: "2",
      cor: "background: purple"
    }, {
      titulo: "3",
      cor: "background: black"

    }]
  },
  mutations: {
    alteraCor(state, cor) {
      state.caixinhas[cor.caixa].cor = cor.cor
    }, alterouTexto(state, texto) {
      state.caixinhas[texto.caixa].titulo = texto.titulo
    }
  },
  actions: {
  },
  modules: {
  }
})
