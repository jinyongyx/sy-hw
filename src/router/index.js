import Vue from 'vue';
import VueRouter from 'vue-router';
import SeachBar from '../components/SearchBar.vue'

import Classify from '../views/Classify.vue'
import Discavey from '../views/Discavey.vue'
import My from '../views/My.vue'
import shopping from '../views/shopping.vue'
import Router from "../views/CalssifyArry/Router.vue"

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        component:SeachBar
    },
    {
        path:"/Classify",
        component:Classify
    },
    {
        path:"/Discavey",
        component:Discavey
    },
    {
        path:"/My",
        component:My,
      
    },
    {
        path:"/shopping",
        component:shopping
    },
    {
        path:"/Router",
        component:Router
    }


]

const router = new VueRouter({
    routes
})

export default router