import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

import BaseLayout from "@/components/BaseLayout.vue";

const app = createApp(App);

app.component("BaseLayout", BaseLayout);

app.use(store).use(router).mount("#app");
