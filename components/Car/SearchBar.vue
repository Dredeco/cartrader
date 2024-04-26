<script setup>
    const city = ref("");
    const cityError = ref(false);

    const handleSearch = () => {
        if(city.value) {
            navigateTo(`/city/${city.value}/car`);
        } else {
            return cityError.value = true;
        }
    }
</script>

<template>
    <div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input 
        type="text" 
        class="py-3 px-5 w-full text-2xl rounded-l-full focus:outline-none" 
        :class="cityError ? 'border-red-500 border-4' : ''"
        placeholder="Search by city..."
        v-model="city"
        />
        <button class="bg-sky-500 px-10 text-white" @click="handleSearch()">Search</button>
    </div> 
</template>