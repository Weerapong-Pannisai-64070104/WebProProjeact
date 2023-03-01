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
  // import booklist from "../components/book.json"
  
  export default {
    name: 'App',
    components: {
      NavBar,
      Carousel_Bar,
      ProductsList,
    },
    data(){
      return{
        // look:'',
        // book : booklist
      }
    },
    //  computed: {
    //     NewS(){
    //       return this.book.filter(x=>((x.name).includes(this.look)))
    //     }
    //  }
  }
  </script>
  
  <style>

  </style>
  