<template>
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
        <div>
            <h2>Book Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Book Name</th>
                        <th>Publisher</th>
                        <th>Published Date</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="book in book" :key="book.isbn">
                        <td>{{ book.isbn }}</td>
                        <td>{{ book.book_name }}</td>
                        <td>{{ book.publisher }}</td>
                        <td>{{ book.published_date }}</td>
                        <td>{{ book.stock }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
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
            book: null
        };
    },
    methods: {
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
                this.book = response.data; 
                console.log(this.book)
            })
            .catch((error) => {
                alert(error.response.data)
            });
    }
};
</script>
  