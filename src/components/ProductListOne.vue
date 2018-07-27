<template>
<div class="">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProducts">
            <span class="name">{{product.name}}</span>
            <span class="price">{{product.price}}</span>
        </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce Price</button>
</div>
    
</template>

<script>
export default {
computed:{

    products(){
        return this.$store.state.products;

    },
    saleProducts(){
        return this.$store.getters.saleProducts;
       
    } 


 },
 methods:{

     reducePrice: function(amount){
         this.$store.dispatch('reducePrice', amount)
     }

 }
}

</script>

<style>

</style>
