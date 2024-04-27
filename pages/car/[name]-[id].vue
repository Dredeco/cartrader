<script setup>
    const route = useRoute();
    const {toTitleCase} = useUtilities();
    const { cars } = await useCars();
    
    useHead({
        title: toTitleCase(route.params.name)
    });
    
    const car = computed(() => {
        return cars.find((c) => c.id == route.params.id);
    })

    if(!car.value) {
        throw createError({
            statusCode: 404,
            message: `Car with ID of ${route.params.id} does not exist`
        })
    }

    definePageMeta({
        layout: 'custom',
    });
</script>

<template>
    <div>
        <CarDetailsHero :car="car"/>
        <CarDetailsAttributes :carAttributes="car.features" />
        <CarDetailsDescription :carDescription="car.description" />
        <CarDetailsContact />
    </div>
</template>