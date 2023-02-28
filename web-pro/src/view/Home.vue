<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <NavBar />
    <Carousel_Bar/>
    <ProductsList />
  </template>
  
  <script>
  import Carousel_Bar from '../components/CarouselBar'
  import NavBar from '../components/NavBar.vue'
  import ProductsList from '../components/ProductsList.vue'
  
  
  export default {
    name: 'App',
    components: {
      NavBar,
      Carousel_Bar,
      ProductsList,
    }
  }
  </script>
  
  <style>

  </style>
  