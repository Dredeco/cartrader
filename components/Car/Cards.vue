<script setup>
    const route = useRoute();
    const {toTitleCase} = useUtilities();
    
    const cars = await useCars();

    useHead({
        title: toTitleCase(route.params.city)
    });
</script>

<template>
    <div class="w-full">
        <!-- CAR CARD -->
        <CarCard v-for="car in cars" :key="car.id" :car="car" />
        <!-- CAR CARD -->
    </div>
</template>