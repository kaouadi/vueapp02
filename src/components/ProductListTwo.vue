<template>
<div class="">
    <h2>Product List Two</h2><ul>
        <li v-for="product in saleProducts">
            <span class="name">{{product.name}}</span>
            <span class="price">{{product.price}}</span>
        </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce Price</button>
</div>
    
</template>

<script>
import {mapGetters} from "vuex";
export default {
computed:{

    products(){
        return this.$store.state.products;

    },
     ...mapGetters('one',{
        saleProducts: 'saleProducts'
     }),


 },

 methods:{

    reducePrice(amount){
    this.$store.dispatch('one/reducePrice', amount)
    }

 }
}

</script>

<style>

</style>
