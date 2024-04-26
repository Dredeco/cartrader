<script setup>
    const props = defineProps({
        car: Object,
    })

    console.log(props)
</script>

<template>
    <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
        <div class="flex h-full">
            <img 
            class="w-[300px] h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbYSy9DEWOh_avY5OUMeZn6D0D0RhaZWbglI2H0ji7A&s" 
            alt="" />

            <div class="p-4 flex flex-col">
                <div>
                    <h1 class="text-2xl text-blue-700">
                    {{ car.model }}
                    </h1>
                    <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem autem dolor culpa omnis atque fugiat placeat optio, eaque quasi numquam voluptatibus ad. Quia ad labore quasi, nesciunt necessitatibus sit!</p>
                </div>
                <h1 class="mt-auto text-xl">$39,555</h1>
            </div>
        </div>
    </div>
</template>