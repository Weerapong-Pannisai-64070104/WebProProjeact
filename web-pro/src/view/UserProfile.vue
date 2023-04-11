<template>
    <div class="bg-gray-100 w-full h-full">
        <NavBar :cart="cart" :clearCart="clearCart" />
        <div class="bg-gray-100 w-full h-full">
            <div class="container mx-auto my-5 p-5">
                <div class="md:flex no-wrap md:-mx-2 ">
                    <!-- Left Side -->
                    <div class="w-full md:w-3/12 md:mx-2">
                        <!-- Profile Card -->
                        <div class="bg-white p-3 border-t-4 border-gray-700 ">
                            <div class="image overflow-hidden">
                                <img class="h-auto w-full mx-auto"
                                    src="https://kfanz.com/wp-content/uploads/2023/03/images28129.jpeg" alt="">
                            </div>
                            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">ชื่อ</h1>
                            <ul
                                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li class="flex items-center py-3">
                                    <span>Member since</span>
                                    <span class="ml-auto"></span>
                                </li>
                            </ul>
                        </div>
                        <!-- End of profile card -->
                        <div class="my-4"></div>
                        <!-- Friends card -->

                        <!-- End of friends card -->
                    </div>
                    <!-- Right Side -->
                    <div class="w-full md:w-9/12 mx-2 h-64">
                        <!-- Profile tab -->
                        <!-- About Section -->

                        <div class="bg-white p-3 shadow-sm rounded-sm">
                            <form>
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide">About</span>
                                </div>

                                <div class="text-gray-700">
                                    <div class="flex">
                                        <div class="px-4 py-2 font-semibold">Customer ID:</div>
                                        <div class="px-4 py-2">1</div>
                                    </div>
                                    <div class="grid md:grid-cols-2 text-l">

                                        <div class="flex">
                                            <div class="px-4 py-2 font-semibold">First Name:</div>
                                            <div class="px-4 py-2">fadfa</div>
                                            <input v-show="editform" type="text" name="fname" placeholder="New first name">
                                        </div>
                                        <div class="flex">
                                            <div class="px-4 py-2 font-semibold">Last Name:</div>
                                            <div class="px-4 py-2">{{ lname }}</div>
                                            <input v-show="editform" type="text" name="lname" placeholder="New last name">
                                        </div>
                                        <div class="flex">
                                            <div class="px-4 py-2 font-semibold">Contact No:</div>
                                            <div class="px-4 py-2">{{ numphone }}</div>
                                            <input v-show="editform" type="text" name="numphone"
                                                placeholder="New phone number">
                                        </div>
                                        <div class="flex">
                                            <div class="px-4 py-2 font-semibold">Email:</div>
                                            <div class="px-4 py-2">
                                                <a class="text-blue-800" href="{{useremail}}">{{ useremail }}</a>
                                            </div>
                                            <input v-show="editform" type="text" name="email" placeholder="New Email">
                                        </div>

                                    </div>
                                    <button v-show="editform" @click="submit()"
                                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Confirm
                                        new information</button>
                                </div>

                            </form>
                            <button v-on:click="editform = !editform"
                                class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Edit
                                Profile</button>
                        </div>


                        <!-- End of about section -->

                        <div class="my-4"></div>

                        <h1 class="text-4xl text-gray-900 font-bold leading-8 my-1 p-2">Inventory</h1>
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">รูปภาพ</span>
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Time
                                        </th>

                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Read</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in inventory" :key="item.id" class="bg-white border-b dark:bg-gray-300">
                                        <td class="px-6 py-4">
                                            <img class="object-contain h-20 w-30" :src="item.image"
                                                alt="Placeholder image" />
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ item.name }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ item.Time }}
                                        </td>

                                        <td class="px-6 py-4 text-right">
                                            <a href="#" class="text-xl font-medium mx-10 my-1 btn btn-secondary">Read</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <footers class="bg-gray-100 w-full h-full">

                            </footers>
                        </div>

                        <!-- End of profile tab -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
// import axios from "axios";
import NavBar from "../components/NavBar.vue";
// import booklist from "../components/book.json"
import axios from "axios";
export default {

    name: "App",
    components: {
        NavBar,
    },
    data() {
        return {
            editform: false,
            cart: [],
            inventory: [
                { image: "data:image/jpeg;base64,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", name: 'name 1', Time: 10 },
            ],
            fname: "",
            lname: "",
            numphone: "",
            useremail: "",
            email: this.$store.state.email
        };
    }, methods: {
        addToCart(products) {
            this.cart.push(products)
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },
        clearCart() {
            this.cart = []
            localStorage.setItem("cart", JSON.stringify(this.cart));

        }, submit() {
            var formData = new FormData();
            formData.append("fname", this.fname);
            formData.append("lname", this.lname);
            formData.append("email", this.email);
            formData.append("password", this.password);
            formData.append("conpassword", this.conpassword);
            formData.append("pnum", this.pnum);
            formData.append("address", this.address);
            axios
                .put("http://localhost:3000/NewUser", formData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    this.$router.push({ path: "/UserProfile" }); // Success! -> redirect to home page
                    console.log(response)
                })
                .catch((error) => {
                    alert(error.response.data)
                });


        },
    }, created() {
        if (localStorage.cart == undefined) {
            this.cart = [];
        } else {
            this.cart = JSON.parse(localStorage.cart);
        }
        axios
            .get("http://localhost:3000/User", { params: { email: this.email } })
            .then((response) => {
                this.book = response.data.book;
                console.log(this.book);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
    
<style></style>
    