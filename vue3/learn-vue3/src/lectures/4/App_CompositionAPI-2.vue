<template>
  <div>
    <p>{{ counter }}</p>
    <p>{{ message }}</p>
    <button @click="increment">click!</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref("0");
    const message = ref("Hello Vue3");
    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      message,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>

<!-- 
	Setup() 함수(hook)는 Composition API 사용을 위한 진입점 역할
	그리고 setup 함수는 컴포넌트 인스턴스가 생성되기 전에 실행
-->
