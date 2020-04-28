import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inPage: false
  },
  mutations: {
    changeInPage(state, value) {
      state.inPage = !state.inPage
      console.log(`state.inPage`, state.inPage);
    }
  },
  actions: {
  },
  modules: {
  },
})
