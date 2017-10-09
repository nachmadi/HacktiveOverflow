import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  questions: []
}
// parameter state disetip method wajib ada, selanjutnya optional
const mutations = {
  setQuestion (state, payload) {
    state.questions = payload
  }
}
// parameter context extend dari object store diantaranya commit gunanya untuk menjalankan mutation harus ada
const actions = {
  getAllQuestion ({ commit }) {
    axios.get('http://localhost:3000/questions')
    .then(({ data }) => {
      console.log(data)
      commit('setQuestion', data)
    })
    .catch(err => console.log(err))
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
