<template>
  <div class="d">
    <NavBar :cart = "cart" />
    <CarouselBar />
    <ProductsList :add= "addToCart" />
  </div>
</template>
  
  <script>
import CarouselBar from "../components/CarouselBar";
import NavBar from "../components/NavBar.vue";
import ProductsList from "../components/ProductsList.vue";
// import booklist from "../components/book.json"

export default {
  name: "App",
  components: {
    NavBar,
    CarouselBar,
    ProductsList,
  },
  data() {
    return {
      cart:[]
    };
  },methods:{
    addToCart(products) {
      this.cart.push(products)
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },created() {
    if (localStorage.cart == undefined) {
      this.cart = [];
    } else {
      this.cart = JSON.parse(localStorage.cart);
    }
  },
};
</script>
  
  <style>
</style>
  