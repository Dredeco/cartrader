<script setup>
    const props = defineProps({
        carAttributes: Array,
    })
</script>

<template>
    <div class="mr-10 mt-5 border-b pb-5">
        <div class="flex text-lg mt-2" v-for="attr in carAttributes" :key="attr">
            <p class="rounded text-lime-800 mr-3">✔</p>
            <p>{{ attr }}</p>
        </div>
    </div>
</template>