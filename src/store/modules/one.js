import product from '../../api/product'



// state
const state = {

    products: []

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

    reducePrice(state,payload){
        state.products.forEach(product => {
            product.price -= payload
        });
    },
    setProducts (state, products) {
        state.products = products
    }

}


// actions
const actions = {

    reducePrice(context, payload){
        setTimeout(function(){
            context.commit('reducePrice', payload)
        },2000);

    },
    getAllProducts ({ commit }) {
        product.getProducts(function(products){
          commit('setProducts', products)
        })
    }


}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }