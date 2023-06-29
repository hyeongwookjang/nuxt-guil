<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    Homepage
  </div>
</template>

<script setup>
const title = ref('Hello World')

definePageMeta({
  title: 'Some Page'
})

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world3\')' } ]
})

// const sayHello = () => console.log("goodbye");
// sayHello();

const { sayHello } = useUtils();
sayHello();


</script>

<style lang="scss" scoped>

</style>