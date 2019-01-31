import Vue from 'vue'
import Vuex from 'vuex'
import ExchangeRates from './modules/exchangeRates'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ExchangeRates
  }
})
