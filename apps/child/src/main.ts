import { createApp } from "vue";
import router from "./router";
import { isMfe } from "./mfe";
import Nav from "./Nav.vue";
import App from "./App.vue";

const navEl = isMfe() ? "#parent-sidebar" : "#child-header";
const bodyEl = isMfe() ? "#parent-body" : "#child-body";

const nav = createApp(Nav);
nav.use(router);
nav.mount(navEl);

const app = createApp(App);
app.use(router);
app.mount(bodyEl);
