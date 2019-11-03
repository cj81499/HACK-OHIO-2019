import Vue from "vue";
import App from "./App.vue";
import Mapbox from "mapbox-gl-vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  components: {
    mapbox: Mapbox
  }
}).$mount("#app");
