import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// import { login } from "./apis/user";
// login({
//   "username": "234567891",
//   "password": "1120768996@Zy"
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
