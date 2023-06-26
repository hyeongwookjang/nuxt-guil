<template>
    <div>
        event id: {{ $route.params.id }}
    </div>
</template>

<script setup>
const nuxt = useNuxtApp()
console.log(nuxt)

const route = useRoute()
console.log(route)

const nuxtApp = useNuxtApp()

</script>

<style lang="scss" scoped>

</style>