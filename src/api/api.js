import axios from 'axios'
export default {
  getCurrency: (cb, errHandler) => {
    axios.get('https://api.exchangeratesapi.io/latest?base=USD').then(
      cb, errHandler
    )
  }
}
