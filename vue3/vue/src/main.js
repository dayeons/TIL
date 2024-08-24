import { createApp } from "vue";
import App from "./App.vue";
import AppHeader from "./component/AppHeader.vue";
import AppNav from "./component/AppNav.vue";
import AppView from "./component/AppView.vue";
import BookComponent from "./component/BookComponent.vue";

const app = createApp(App);

app.component("AppHeader", AppHeader);
app.component("AppNav", AppNav);
app.component("AppView", AppView);
app.component("BookComponent", BookComponent);
app.mount("#app");
