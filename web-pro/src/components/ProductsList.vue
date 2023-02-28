
<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <router-link v-for="product in products" :key="product.id" :to="product.href" class="group">
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
  
<script setup>
const products = [
    {
        id: 1,
        name: "มุมมองนักอ่านพระเจ้า เล่ม 7",
        href: "/Product",
        imageSrc:
            "https://cdn.discordapp.com/attachments/959359393776959553/1080179282082537513/9786161850883L.png",
        imageAlt:
            "มุมมองนักอ่านพระเจ้า เล่ม 7",
    },
    {
        id: 2,
        name: "Nomad Tumbler",
        href: "/Product",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "Focus Paper Refill",
        href: "/Product",
        price: "$89",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "/Product",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
        id: 1,
        name: "Earthen Bottle",
        href: "/Product",
        price: "$48",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 2,
        name: "Nomad Tumbler",
        href: "/Product",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "Focus Paper Refill",
        href: "/Product",
        price: "$89",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "/Product",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
];
</script>