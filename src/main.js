import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .directive("focus", {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el, b) {
      // 聚焦元素
      el.focus();
      console.log("动态参数名：", b.arg);
      console.log("动态参数值：", b.value);
    },
    updated(...t) {
      console.log(t);
    },
  })
  .mount(document.body);
