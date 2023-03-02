<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <SignInBar/>
</template>

<script>
import SignInBar from '../components/SignInBar.vue'


export default {
    name: 'SignInPage',
    components: {
        SignInBar,
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