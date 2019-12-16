import Vue from 'vue';
import VueRouter from 'vue-router';
import SeachBar from '../components/SearchBar.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:"",
        component:SeachBar
    }
]

const router = new VueRouter({
    routes
})

export default router