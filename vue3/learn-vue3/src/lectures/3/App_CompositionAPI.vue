<template>
  <div>
    <button v-on:click="increment">Counter {{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;

    onMounted(() => {
      console.log("컴포넌트가 마운트 되었습니다.");
    });

    return {
      counter,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
<!--
  Composition API 옵션(data, methods, ...)을 선언하는 대신 가져온 함수
  (ref, onMounted, ...)를 사용하여 Vue 컴포넌트를 작성할 수 있는 API
-->