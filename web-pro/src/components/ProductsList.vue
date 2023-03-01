
<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>
            <form>   
              <div class="relative p-8 mb-5 ">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 mb-13.5 pointer-events-none">
                      <svg aria-hidden="true" class="w-100 h-5 pr-2 text-gray-800 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input v-model="look" type="search" id="default-search" class="block w-100 p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required >
                  <!-- <button type="submit" class="text-white absolute w-5  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
              </div>
            </form >
                  
                <div class="d">
                    <button @click="toggle" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Toggle</button>
                        <div v-if="active"> 
                                <div class="card ">
                                    <div class="card-content px-2 grid grid-cols-5">
                                        <div class="All btn btn-link">
                                            <button @click='unCheck' >All</button>
                                        </div>
                                        <div class="Novel btn btn-link">
                                            <input type="radio" id="one" value="Novel" v-model="picked" />
                                            <label for="one" >Novel</label>
                                           
                                        </div>
                                        <div class="Philosophy btn btn-link">
                                            <input type="radio" id="two" value="Philosophy" v-model="picked" />
                                            <label for="two"  >Philosophy</label>
                                        </div>
                                        <div class="Religion btn btn-link">
                                            <input type="radio" id="three" value="Religion" v-model="picked" />
                                            <label for="three" >Religion</label>
                                        </div>
                                         <div class="Math btn btn-link">
                                            <input type="radio" id="four" value="Math" v-model="picked" />
                                            <label for="four" >Math</label>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>  
            <div class="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
                <router-link v-for="(product, index) in NewS"  :key="index" :to="product.href" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img :src="product.imageSrc" :alt="product.imageAlt"
                            class="h-full w-full object-cover object-center group-hover:opacity-80" />
                    </div>
                    <h3 class=" mx-4 text-gray-700 text-xl ">{{ product.name }}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">
                        {{ product.price }}
                        
                    </p>
                    <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Borrow
                    </button>
                </router-link>
            </div>
        </div>
        {{picked}}
    </div>
</template>

<script>
import booklist from "./book.json"
export default {
    name: 'ProductList',
    components:{
        
    },
    data(){
        return{
            book : booklist,
            look:'',
            active: false,
            picked:''
        }
    },computed: {
        NewS(){
            if(this.look != ''){
                return this.book.filter(x=>((x.name).includes(this.look)))
            }if(this.picked !=''){
                return this.book.filter(x=>(x.gerne == this.picked ))
            }else{
                return this.book
            }
            
        },
     },methods: {
      toggle () {
        this.active = !this.active
      }, unCheck() {
                    this.picked = ''
                }
    }
    
}

</script>