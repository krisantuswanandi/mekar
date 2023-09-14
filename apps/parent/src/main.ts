import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

window.MFE_ENABLED = true;

const app = createApp(App);
app.use(router);
app.mount("#parent-app");
