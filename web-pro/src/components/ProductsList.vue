
<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>
            <form>   
              <div class="relative p-8 mb-20 ">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-100 h-5 pr-2 text-gray-800 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input v-model="look" type="search" id="default-search" class="block w-100 p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required >
                  <!-- <button type="submit" class="text-white absolute w-5  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
              </div>
            </form>
            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
                <router-link v-for="(product, index) in NewS"  :key="index" :to="product.href" class="group">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
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
    </div>
</template>

<script>
import booklist from "./book.json"
export default {
    name: 'ProductList',
    data(){
        return{
            book : booklist,
            look:'',
        }
    },computed: {
        NewS(){
          return this.book.filter(x=>((x.name).includes(this.look)))
        }
     }
    
}
// const products = [
//     {
//         id: 1,
//         name: "มุมมองนักอ่านพระเจ้า เล่ม 7",
//         href: "/Product",
//         imageSrc:
//             "https://cdn.discordapp.com/attachments/959359393776959553/1080179282082537513/9786161850883L.png",
//         imageAlt:
//             "มุมมองนักอ่านพระเจ้า เล่ม 7",
//     },
//     {
//         id: 2,
//         name: "Nomad Tumbler",
//         href: "/Product",
//         price: "$35",
//         imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
//         imageAlt:
//             "Olive drab green insulated bottle with flared screw lid and flat top.",
//     },
//     {
//         id: 3,
//         name: "Focus Paper Refill",
//         href: "/Product",
//         price: "$89",
//         imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
//         imageAlt:
//             "Person using a pen to cross a task off a productivity paper card.",
//     },
//     {
//         id: 4,
//         name: "Machined Mechanical Pencil",
//         href: "/Product",
//         price: "$35",
//         imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//         imageAlt:
//             "Hand holding black machined steel mechanical pencil with brass tip and top.",
//     },
//     {
//         id: 1,
//         name: "Earthen Bottle",
//         href: "/Product",
//         price: "$48",
//         imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
//         imageAlt:
//             "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//     },
//     {
//         id: 2,
//         name: "Nomad Tumbler",
//         href: "/Product",
//         price: "$35",
//         imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
//         imageAlt:
//             "Olive drab green insulated bottle with flared screw lid and flat top.",
//     },
//     {
//         id: 3,
//         name: "Focus Paper Refill",
//         href: "/Product",
//         price: "$89",
//         imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
//         imageAlt:
//             "Person using a pen to cross a task off a productivity paper card.",
//     },
//     {
//         id: 4,
//         name: "Machined Mechanical Pencil",
//         href: "/Product",
//         price: "$35",
//         imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//         imageAlt:
//             "Hand holding black machined steel mechanical pencil with brass tip and top.",
//     },
//     // More products...
// ];
</script>