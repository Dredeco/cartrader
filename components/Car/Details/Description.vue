<script setup>
    const props = defineProps({
        carDescription: String,
    })
</script>

<template>
    <div class="mt-5">
        <p class="mb-10">
            {{ carDescription }}
        </p>
    </div>
</template>