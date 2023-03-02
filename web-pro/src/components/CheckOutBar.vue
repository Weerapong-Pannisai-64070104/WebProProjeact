<template>
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="w-full">
            <thead class="border-b">
                <tr>
                    <th> </th>
                    <th class="px-4 py-2 text-left">Title</th>
                    <th class="px-4 py-2 text-left">Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item.id">
                    <td class="px-4 py-2">
                        <img class="object-contain h-48 w-96" :src=item.image alt="Placeholder image">
                    </td>
                    <td class="px-4 py-2">{{ item.title }}</td>
                    <td class="px-4 py-2">{{ item.quantity }}</td>
                </tr>
            </tbody>
        </table>
        <form class="mt-8 flex flex-col space-y-4 place-content-center">
        <label class="block font-bold mb-2" for="borrow-time">Select Borrow Time:</label>
        <input v-model="timeinput" class="w-6/12 bg-white rounded-lg border border-gray-400 p-2" type="datetime-local"
            id="borrow-time" placeholder="" name="borrow-time">
        <div class="mb-6">
            <label for="default-input" class="block font-bold mb-2">หมายเหตุ:</label>
            <textarea v-model="textareainput" rows="4" class="w-6/12 bg-white rounded-lg border border-gray-400 p-2"
                placeholder="Write your thoughts here..."></textarea>
        </div>
        <button class=" w-6/12 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit">Submit</button>

    </form>
    </div>
    
    
</template>

<script>
export default {
    data() {
        return {
            cart: [
                { id: 1, image: 'https://www.akerufeed.com/wp-content/uploads/2021/02/iu1.png', title: 'iu', quantity: 1 },
                { id: 2, image: 'https://cms.dmpcdn.com/musicarticle/2020/05/20/ea51bff0-9a87-11ea-b1d8-6d00bb680c69_original.jpg', title: 'iu', quantity: 1 },
            ],
            timeinput: {},
            textareainput: ""
        }
    },

    methods: {
        // put to Storage
        getLength: function () {
            this.length = this.myInput.length;
        }
    }
}
</script>

<style></style>