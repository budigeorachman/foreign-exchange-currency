import currencyApi from '@/api/api'

export const state = {
  foreignExchanges: {}
}

export const mutations = {
  setForeignExchange (state, data) {
    state.foreignExchanges = data
  }
}

export const getters = {
  foreignExchange: function (state) {
    return state.foreignExchanges
  }
}
export const actions = {
  getFixedCurrency ({commit}, {success, fail} = {}) {
    currencyApi.getCurrency((res) => {
      commit('setForeignExchange', res.data)
    }, fail)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
