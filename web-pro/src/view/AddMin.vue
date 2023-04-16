<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="flex">
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-s mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Add new Book</h1>
                    <form>
                        <label for="isbn">ISBN:</label>
                        <input type="text" class="border border-grey-light w-full  rounded mb-4" id="isbn" v-model="isbn"
                            required><br>


                        <label for="book_name">Book Name:</label>
                        <input type="text" class="border border-grey-light w-full  rounded mb-4" id="book_name"
                            v-model="book_name" required><br>

                        <label for="author">Author Name:</label>
                        <input type="text" class="border border-grey-light w-full  rounded mb-4" id="book_name"
                            v-model="author" required><br>


                        <label for="alias">Author alias:</label>
                        <input type="text" class="border border-grey-light w-full  rounded mb-4" id="book_name"
                            v-model="alias"><br>




                        <label for="book_desc">Book Description:</label>
                        <input type="text" class="border border-grey-light w-full  rounded mb-4" id="book_desc"
                            v-model="book_desc" required><br>

                        <label for="published_date">Published Date:</label>
                        <input type="date" class="border border-grey-light w-full  rounded mb-4" id="published_date"
                            v-model="published_date" required><br>


                        <label for="publisher_name">Publisher Name:</label>
                        <input type="text" class="border border-grey-light w-full  rounded mb-4" id="publisher_id"
                            v-model="publisher_name" required><br>

                        <label for="book_stock">Book Stock:</label>
                        <input type="number" class="border border-grey-light w-full  rounded mb-4" id="book_stock"
                            v-model="book_stock" required><br>
                        <label for="">Book Type:</label>
                        <select v-model="type">
                            <option selected value="None">None</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Fiction">Non-Fiction</option>
                            <option value="Fiction">Children</option>
                        </select>
                        <div class="flex">
                            <label for="book_img">Book_Image: </label>
                            <input type="file" class="file-input" id="file-input" ref="file" @change="handleFileUpload()">
                        </div><br>
                        <button type="submit" @click="submit()"
                            class="w-full inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Add
                            new book</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="">
            <h2>Book Information</h2>
            <div class=" tbl-fixed">
                <table class="table-auto border-spacing-px min-w-max ">
                    <thead>
                        <tr class="sticky top-0">
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white ">
                                ISBN</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white ">
                                Book Name</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                book_img</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                Published Date</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                publisher_id</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                book_stock</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                publisher_name</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                author_id</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                author_name</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                author_alias</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                Type_id</th>
                            <th
                                class=" px-1 bg-black text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-white">
                                book_type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.isbn">
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.isbn }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.book_name }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                <img class="w-20 h-30" :src="`http://localhost:3000/${book.book_img}`" alt=""></td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.publishered_date.slice(0, 10) }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.publisher_id }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.book_stock }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.publisher_name }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.author_id }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.author_name }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.author_alias }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.Type_id }}</td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                {{ book.book_type }}</td>
                            <td><button type="submit"
                                    class="w-full inline-flex 
                            items-center justify-center px-4 py-2 bg-black border border-transparent rounded-md font-semibold text-xs capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Edit</button>
                                <button @click="del(book)"
                                    class="w-full inline-flex 
                            items-center justify-center px-4 py-2 bg-black border border-transparent rounded-md text-xs font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    </div>
</template>
  <style>
  .tbl-fixed{
    overflow-y: scroll;
    overflow-x: scroll;
    height: fit-content;
    max-width: 1000px;
    max-height: 400px;
  }
</style>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            isbn: "",
            book_name: null,
            book_desc: null,
            published_date: null,
            book_stock: null,
            file: null,
            author: null,
            alias: null,
            publisher_name: null,
            type: "None",
            books: null
        };
    },
    methods: {
        del(book) {
            axios
                .delete("http://localhost:3000/bookdel", { params: { isbn: book.isbn } }, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    this.books.splice(this.books.indexOf(book), 1)
                    console.log(this.books)
                    console.log(response)
                    this.$emit('book', null)

                })
                .catch((error) => {
                    alert(error.response.data)
                });
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
            console.log(this.file)
        },
        submit() {
            console.log(this.isbn)
            var formData = new FormData();
            formData.append("book_img", this.file);
            formData.append("isbn", this.isbn);
            formData.append("book_name", this.book_name);
            formData.append("book_desc", this.book_desc);
            formData.append("published_date", this.published_date);
            formData.append("publisher_name", this.publisher_name);
            formData.append("book_stock", this.book_stock);
            formData.append("alias", this.alias);
            formData.append("author", this.author);
            formData.append("type", this.type);
            axios
                .post("http://localhost:3000/Addbook", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },

                })
                .then((response) => {
                    this.$router.push({ path: "/Addmin" }); // Success! -> redirect to home page
                    console.log(response)
                })
                .catch((error) => {
                    alert(error.response.data)
                });


        }
    }, created() {

        axios
            .get("http://localhost:3000/book", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                this.books = response.data;
                console.log(this.books)

            })
            .catch((error) => {
                alert(error.response.data)
            });
    }
};
</script>
  