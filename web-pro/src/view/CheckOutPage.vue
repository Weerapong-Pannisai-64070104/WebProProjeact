<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <NavBar />
    <CheckOutBar/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import CheckOutBar from '../components/CheckOutBar.vue'


export default {
    name: 'CheckOutPage',
    components: {
        NavBar,
        CheckOutBar
    }
}
</script>

<style>

</style>