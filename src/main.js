import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import "./assets/css/style.css"
import vueSwiper from 'vue-awesome-swiper'
import store from "./store/index"




Vue.use(vueSwiper)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
