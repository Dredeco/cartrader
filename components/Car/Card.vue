<script setup>
    const props = defineProps({
        car: Object,
    })
</script>

<template>
    <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
        <div class="flex h-full" @click="navigateTo(`/car/${car.name.split(' ')[0]}-${car.id}`)">
            <img 
            class="w-[300px] h-full"
            :src="car.url"
            alt="" />

            <div class="p-4 flex flex-col">
                <div>
                    <h1 class="text-2xl text-blue-700">
                    {{ car.name }}
                    </h1>
                    <p class="text-gray-700">{{ car.description }}</p>
                </div>
                <h1 class="mt-auto text-xl">$ {{ car.price }}</h1>
            </div>
        </div>
    </div>
</template>