import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {

        products: [
            {name: 'Banan Skin', price: 20},
            {name: 'Banan JK', price: 40},
            {name: 'Banan LM', price: 60},
    
          ]

    },
    getters:{

        saleProducts: function(state){
            var saleProducts = state.products.map(function(product){
                return {
                    name: product.name,
                    price: product.price/2
                }
            })
            return saleProducts;
        } 

    }

})
