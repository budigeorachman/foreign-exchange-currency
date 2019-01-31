import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'foreign-exchange-currency',
  computed: {
    ...mapGetters([
      'foreignExchange'
    ]),
    selectCSS: function () {
      return this.selected === '' ? 'select-option-no-button' : 'select-option'
    }
  },
  data () {
    return {
      selected: '',
      nameOfCurrency: {
          ISK: 'Islandia Krona',
          CAD: 'Kanada Dollar',
          MXN: 'Meksiko Peso',
          CHF: 'Swiss Franc',
          AUD: 'Australia Dollar',
          CNY: 'Yuan',
          GBP: 'Pound Sterling',
          USD: 'United States Dollar',
          SEK: 'Swedia Krona',
          NOK: 'Norwegia Krona',
          TRY: 'YTL',
          IDR: 'Indonesian Rupiah',
          ZAR: 'Rand',
          HRK: 'Kroasia Kuno',
          EUR: 'Euro',
          HKD: 'Hongkong Dollar',
          ILS: 'Shekel',
          NZD: 'Selandia Baru Dollar',
          MYR: 'Ringgit',
          JPY: 'Japanese Yen',
          CZK: 'Koruna',
          SGD: 'Singapore Dollar',
          RUB: 'Rubel',
          RON: 'Leu',
          HUF: 'Forint',
          BGN: 'Lev',
          INR: 'Rupee',
          KRW: 'Won',
          DKK: 'Denmark Krona',
          THB: 'Baht',
          PHP: 'Filipina Peso',
          PLN: 'Zloty',
          BRL: 'Real'
      },
      history: [],
      nominalInput: 10
    }
  },
  methods: {
    ...mapActions([
      'getFixedCurrency'
    ]),
    resetHistory: function(){
      this.history=[]
    },
    deleteHistory: function(index){
        this.history.splice(index,1)
    },
    buttonSubmit: function () {
      let name = this.nameOfCurrency[this.selected.code]
      let currName = this.selected.code + ' - ' + !!name ? name : ''
      let temp = {
        result: this.selected.rate * this.nominalInput,
        currency: {
          code: this.selected.code,
          rate: this.selected.rate,
          name: currName
        }
      }
      this.history.push(temp)
      this.selected = ''
    }
  },
  created () {
    this.getFixedCurrency()
  }
}
