<template>
<div class="">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in products">
            <span class="name">{{product.name}}</span>
            <span class="price">{{product.price}}</span>
        </li>
    </ul>
</div>
    
</template>

<script>
export default {
    props:['products'],
    data(){
        return {

        }
    }

}
</script>

<style>

</style>
