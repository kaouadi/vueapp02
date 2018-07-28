import Vue from 'vue'
import Vuex from 'vuex'
import one from './modules/one'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    one
  },
  strict: debug
})