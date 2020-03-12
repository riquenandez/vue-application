import Vue from "vue";
import App from "./App.vue";

//aos animation import
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    //initialize AOS
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
