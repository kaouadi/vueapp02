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

    }

})
