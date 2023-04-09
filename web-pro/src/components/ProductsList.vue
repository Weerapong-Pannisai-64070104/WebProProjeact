
<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>
      <form class="">
        <div class="relative p-8 mb-auto mt-5">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 mb-13.5 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-100 h-5 pr-2 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            v-model="look"
            type="search"
            id="default-search"
            class="block w-100 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search "
            required
          />
          <!-- <button type="submit" class="text-white absolute w-5  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
        </div>
      </form>

      <div class="d">
        <button @click="toggle" class="btn btn-dark">Genres</button>
        <div v-if="active">
          <div class="card mt-2">
            <div class="card-content px-2 py-2 grid grid-cols-5">
              <div class="All">
                <button @click="unCheck">All</button>
              </div>
              <div class="" v-for="item in genre" :key="item.id">
                <div class="Novel">
                  <input
                  
                    type="radio"
                    id="one"
                    name="type"
                    :value="item.value"
                    v-model="picked"
                  />
                  <label>{{ item.name }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10"
      >
        <a v-for="product in NewS" :key="product.isbn" class="group">
          <!-- <router-link :to="product.href"> -->
            <div
              class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
            >
              <img
                :src="product.book_img"
                :alt="product.imageAlt"
                class="h-full w-full object-cover object-center group-hover:opacity-80"
              />
            </div>
          <!-- </router-link> -->
          <h3 class="mx-4 text-gray-700 text-l text-center">
            {{ product.book_name }}
          </h3>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
            @click="addToCart(product)"
          >
            Borrow
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const genre = [
  { name: "Children", href: "#", current: false ,value:"Children"},
  { name: "Non-Fiction", href: "#", current: false ,value:"Non-Fiction"},
  { name: "Fiction", href: "#", current: false ,value:"Fiction"},
];
</script>
<script>
import axios from "axios";


export default {
  name: "ProductList",
  components: {},
  
    props: {
    add: { type: Function },
  },
  data() {
    return {
      book: null,
      look: "",
      active: false,
      picked: "",
      cart: [],
      
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    unCheck() {
      this.picked = "";
    },
    addToCart(products) {
       this.add(products)
    },
  },created() {
    axios
      .get("http://localhost:3000/" )
      .then((response) => {
        this.book = response.data.book;
        console.log(this.book);
      })
      .catch((err) => {
        console.log(err);
      });
  },computed: {
    NewS() {
      let booklits = this.book
       
      if (this.look != "") {
        return booklits.filter((x) => (x.book_name.toLowerCase()).includes((this.look).toLowerCase()));
      }
      if (this.picked != "") {
        // console.log(type.filter(x=>x.genre.includes(this.picked)  ))
        return booklits.filter((x) => x.book_type.includes(this.picked));
      } else {
        
        return booklits;
      }
    },
  },
};
</script>
