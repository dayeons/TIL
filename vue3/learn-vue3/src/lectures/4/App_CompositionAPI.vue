<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMessage">Add Message</button>
    <h2>일반 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMessage">Add Message</button>
  </div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from "vue";

export default {
  setup() {
    console.log("setup()");

    const reactiveMessage = ref("Hello Reacive Message");
    const addReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + "!";
    };
    console.log("isRef(reactiveMessage): ", isRef(reactiveMessage));

    let normalMessage = "Hello normal Message";
    const addNormalMessage = () => {
      normalMessage = normalMessage + "!";
    };
    console.log("isRef(normalMessage): ", isRef(normalMessage));

    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
		
    return {
      reactiveMessage,
      normalMessage,
      addReactiveMessage,
      addNormalMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
<!-- 
	Composition API
	- 반응형 API
		ref(), reactive()와 같은 API를 사용하여 reactive state(반응 상태), computed state(계산된 상태), watchers(감시자)
	- 라이프 사이클 훅(Lifecycle Hooks)
		onMounted(), onUnmounted()
		라이프사이클 특정 시점에서 이러한 함수로 코드를 삽입
	- 종속성 주입(Dependency Injection)
		provide()와 inject()는 Reactivity API를 사용하는 동안 Vue의 의존성 주입 시스템을 활용
-->
