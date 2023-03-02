<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="d">
        <NavBar />
         <ProductOver/>
    </div>
    
    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductOver from '../components/ProductOver.vue'


export default {
    name: 'ProfileUser',
    components: {
        NavBar,
        ProductOver
    }
}
</script>

<style>
#prou {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>