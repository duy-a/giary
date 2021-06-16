import AppTaskListItem from "@/components/AppTaskListItem.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.component("BaseLayout", BaseLayout);
app.component("AppTaskListItem", AppTaskListItem);

app.use(store).use(router).mount("#app");
