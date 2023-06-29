<template>
  <div>
      <h1>Profile page</h1>
  </div>
</template>

<script setup>

useHead({
  title: "profile page"
})

// const sayHello = () => console.log("goodbye");
// sayHello();

const { sayHello } = useUtils();
sayHello();


</script>

<style lang="scss" scoped>

</style>