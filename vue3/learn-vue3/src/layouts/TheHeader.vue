<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Dayeons Vue3</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about"
                >About</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/posts"
                >게시글</RouterLink
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-outline-light" type="button" @click="goPage">
              글쓰기
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goPage = () => {
  // router.push("/posts/create");
  router.push({
    name: "PostCreate",
  });
};
</script>

<style lang="scss" scoped></style>

<!-- 
  RouterLink 일반 a 태그를 사용하는 대신 커스텀 컴포넌트
  이를 통해 Vue Router는 페이지를 리로딩 하지 않고 URL에 매핑된 페이지를 랜더링
-->
