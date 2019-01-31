import Vue from 'vue'
import Router from 'vue-router'
import ForeignExchangeCurrency from '@/components/ForeignExchangeCurrency'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ForeignExchangeCurrency',
      component: ForeignExchangeCurrency
    }
  ]
})
