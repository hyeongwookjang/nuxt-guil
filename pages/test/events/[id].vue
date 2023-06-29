<template>
    <div>
        event id: {{ $route.params.id }}
    </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
console.log(nuxtApp)

const route = useRoute()
console.log(route)

</script>

<style lang="scss" scoped>

</style>