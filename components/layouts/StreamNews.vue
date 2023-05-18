<template>
  <div class="stream-news mt-10 mr-4">
    <ul>
      <li v-for="stock in stock_info">
      [{{ stock.code }}] {{ stock.company }},
      始値:{{ stock.stock_price.open }},
      高値:{{ stock.stock_price.high }},
      安値:{{ stock.stock_price.low }},
      終値:{{ stock.stock_price.close }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const stock_info = {
  1: {
    "code": 2980,
    "company": 'Watanabe Inc.',
    "stock_price": {
      "open": 6593.34,
      "high": 6600,
      "low": 6582.63,
      "close": 6600
    }
  },
  2: {
    "code": 5430,
    "company": '株式会社渡部工業',
    "stock_price": {
      "open": 593.34,
      "high": 600,
      "low": 582.63,
      "close": 599.3
    }
  }
}
</script>

<style>
.stream-news {
margin : 0 auto 40px;
width : 100%;
font-size : 24px;
text-align : center;
overflow : hidden;
}
.stream-news p{
margin:0;
display : inline-block;
padding-left: 100%;
white-space : nowrap;
line-height : 1em;
animation : scrollSample01 20s linear infinite;
}
.stream-news ul{
margin:0;
display : inline-block;
padding-left: 100%;
white-space : nowrap;
line-height : 1em;
animation : scrollStreamNews 15s linear infinite;
}
.stream-news ul li{
display:inline;
margin:0 100px 0 0;
/* font-style:italic;
font-weight:bold; */
}
@keyframes scrollStreamNews{
0% { transform: translateX(0)}
100% { transform: translateX(-100%)}
}
</style>