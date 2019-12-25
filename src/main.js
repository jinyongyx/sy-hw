import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import "./assets/css/style.css"
import vueSwiper from 'vue-awesome-swiper'
import store from "./store/index"
import 'vue-search-bar/dist/vue-search-bar.min.css';

import { SearchBar } from 'vue-search-bar';


Vue.use(SearchBar);



Vue.use(vueSwiper)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
