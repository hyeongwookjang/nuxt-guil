<template>
    <div>
        event id: {{ $route.params.id }}
    </div>
</template>

<script setup>
const nuxtApp3 = useNuxtApp()
console.log(nuxtApp)

const route = useRoute()
console.log(route)

const nuxtApp = useNuxtApp()
console.log(nuxtApp)

</script>

<style lang="scss" scoped>

</style>