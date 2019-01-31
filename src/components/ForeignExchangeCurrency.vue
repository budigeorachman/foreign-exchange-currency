<template>
  <div class="data-container">
    <!--header-->
    <div class="label-container">
      <div class="label-general">
        USD - United States Dollars
      </div>
      <br>
      <br>
      <span class="label-currency">
        USD
      </span>
      <span>
        <input class="text-input" v-model="nominalInput" @change="resetHistory">
      </span>
    </div>
    <hr>

    <!--currency container-->
    <div class="currency-container" v-for="(item, index) in history" :key="item.id">
        <div class="currency-data">
          <span class="currency-code">{{item.currency.code}}</span>
          <span class="item-result">{{item.result.toFixed(4)}}</span>
          <br>
          <br>
          <span class="item-currency-code">{{item.currency.code}}</span>
          -
          <span class="currency-name">{{item.currency.name}}</span>
          <br>
          <br>
          <span class="currency-default">1 USD =</span>
          <span class="code">{{item.currency.code}}</span>
          <span class="currency-rate">{{item.currency.rate.toFixed(4)}}</span>
        </div>
        <div class="remove-currency-data">
          <div class="remove-toggle" @click="deleteHistory(index)">(-)</div>
        </div>
    </div>
    <br>
      <div class="add-more-currencies">
        <!--foreign exchange-->
        <select :id="selectCSS" v-model="selected">
          <option disabled value="">(+) Add More Currencies</option>
          <option v-for="(item, key) in foreignExchange.rates" :value="{code: key, rate: item}" :key="item.id">{{key}}</option>
        </select>
        <div class="btnSubmit" v-if="selected!==''" @click="buttonSubmit">Submit</div>
      </div>
  </div>
</template>
<script src="./js/foreign-exchange-currency.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .data-container{
    max-width: 100%;
    max-height: 100%;
  }

  .label-container{
    margin-left: 10px;
  }

  .label-general{
    float: left;
    color: black;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
  }

  .label-currency{
    color: black;
    font-weight: bold;
    font-size: 30px;
  }

  .text-input{
    float: right;
    margin-right: 15px;
    opacity: 50;
    font-weight: bold;
  }

  .currency-container{
    height: 8em;
    border: 1px solid #000;
    margin-top: 15px;
  }

  .currency-data{
    width: 90%;
    height: 100%;
    display: inline-block;
  }

  .currency-code{
    margin-left: 5px;
    font-size: 25px;
    font-weight: 500;
  }

  .item-result{
    margin-left: 10%;
    font-size: 25px;
    font-weight: 500;
  }

  .item-currency-code{
    margin-left: 5px;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
  }

  .currency-name{
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
  }

  .currency-default, .code{
    margin-left: 5px;
    font-style: italic;
  }

  .currency-rate{
    font-style: italic;
  }

  .remove-currency-data{
    height: 129px;
    width: 5%;
    border-left: 1px solid #000;
    float: right;
    display: inline-block;
  }

  .remove-toggle{
    text-align: center;
    cursor: pointer;
    line-height: 120px;
  }

  .add-more-currencies{
    width: 100%;
    height: 50px;
    border: 1px solid #000;
  }

  #select-option{
    min-width: 83%;
    height: 100%;
    display: inline-block;
    background-color: buttonface;
  }

  #select-option-no-button{
    min-width: 100%;
    height: 100%;
    display: inline-block;
    background-color: buttonface;
  }

  .btnSubmit{
    width: 15%;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
    display: inline-block;
  }

</style>
