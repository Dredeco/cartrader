<script setup>
    const { cars } = await useCars();
</script>

<template>
    <div class="w-full">
        <!-- CAR CARD -->
        <CarCard v-for="car in cars" :key="car.id" :car="car" />
        <!-- CAR CARD -->
    </div>
</template>