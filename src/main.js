import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Nailstyle from "./components/Nailstyle.vue";
import Storeguide from "./components/Storeguide.vue";
import Appointmentform from "./components/Appointmentform.vue";
import MProblem from "./components/MProblem.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/Nailstyle-0", component: Nailstyle },
  { path: "/Storeguide", component: Storeguide },
  { path: "/Appointmentform", component: Appointmentform },
  { path: "/mproblem", component: MProblem },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
