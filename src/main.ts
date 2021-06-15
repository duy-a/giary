import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

import BaseLayout from "@/components/BaseLayout.vue";
import AppTaskListItem from "@/components/AppTaskListItem.vue";

const app = createApp(App);

app.component("BaseLayout", BaseLayout);
app.component("AppTaskListItem", AppTaskListItem);

app.use(store).use(router).mount("#app");
