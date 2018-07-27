<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products">></product-list-two>

  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'

export default {
  name: 'app',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two':ProductListTwo
  },
  data(){
    return {
      products: [
        {name: 'Banan Skin', price: 20},
        {name: 'Banan JK', price: 40},
        {name: 'Banan LM', price: 60},

      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>
