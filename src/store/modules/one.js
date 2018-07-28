// state
const state = {

    products: [
        {name: 'Banan Skin', price: 20},
        {name: 'Banan JK', price: 40},
        {name: 'Banan LM', price: 60},

      ]

}

// getters
const getters = {

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

// mutations
const mutations = {

    reducePrice: function(state,payload){
        state.products.forEach(product => {
            product.price -= payload
        });


    }

}


// actions
const actions = {

    reducePrice(context, payload){
        setTimeout(function(){
            context.commit('reducePrice', payload)
        },2000);

    }


}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }