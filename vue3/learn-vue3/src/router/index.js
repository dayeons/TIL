import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
		name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
		name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;

/* 
	router를 설정할 때 app.use(router) 를 호출, 이렇게 호출함으로써 모든 자식 컴포넌트에 router, route 같은 객체를 사용할 수 있다. 그리고 이러한 객체를 페이지 이동 또는 현재 활성 라우트(경로 매핑)정보에 접근하는데 사용

	- router 라우터 인스턴스로 javascript 에서 다른 페이지(컴포넌트)로 이동
	- route 현재 활성 라우트 정보에 접근(이 속성은 읽기 전용)
*/