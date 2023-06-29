<template>
    <div class="Main">
        <h1>Main page</h1>
        <div>
        <!-- <Alert/>
        <Profile/>
        <ProfileHeader/> -->
        <!-- <ContentDoc /> -->
        {{ products }}
        </div>
        <div>
        <!-- 이미지 넣는 방식 -->
        <!-- <IconsBell/> -->
        <!-- <img src="~/assets/img/2.jpg" alt=""/> -->
        <!-- public 이용 주의할것-->
        <!-- <img src="1.jpg" alt=""/> -->
        <!-- <img src="~/assets/icons/22.svg" alt=""/> -->
        </div>
        <div>
            Counter: {{ counter }}
            <button @click="counter++">+</button>
            <button @click="counter--">-</button>
        </div>
    </div>
</template>

<script setup>

const { data: products } = await useFetch('/api/products', {
    transform: (_products) => _products.data,
});
console.log(toRaw(products.value));


// const response = await $fetch('/api/hello')
// console.log(response)
/* 피니아 설정
 * import { useCounterStore } from "~/stores/myStore";
 * const store = useCounterStore();
 */


// definePageMeta({
//   middleware: 'auth',
// })

// const sayHello = () => console.log("Hello");
// sayHello();

// const { sayHello } = useUtils();
// sayHello();

// const { $sayHello } = useNuxtApp();
// $sayHello("Guillaume");

// console.log(useNuxtApp());

// const counter = useState("counter", () => Math.round(Math.random() * 100));
const counter = useCounter();


</script>

<style lang="scss" scoped>

</style>