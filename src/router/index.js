import Vue from 'vue';
import VueRouter from 'vue-router';
import SeachBar from '../components/SearchBar.vue'

import Classify from '../views/Classify.vue'
import Discavey from '../views/Discavey.vue'
import My from '../views/My.vue'
import shopping from '../views/shopping.vue'
import Router from "../views/CalssifyArry/Router.vue"
import Logon from "../views/Logon.vue"
import Commodity from "../views/CalssifyArry/Commodity.vue"

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        component:SeachBar,
        meta:{
            isshow:true
        }
    },
    {
        path:"/Classify",
        component:Classify,
        meta:{
            isshow:true
        }
    },
    {
        path:"/Discavey",
        component:Discavey,
        meta:{
            isshow:true
        }
    },
    {
        path:"/My",
        component:My,
        meta:{
            isshow:true
        }
      
    },
    {
        path:"/shopping",
        component:shopping,
        meta:{
            isshow:true
        }
    },
    {
        path:"/Router",
        component:Router,
        meta:{
            isshow:false
        }
    },
    {
        path:"/Logon",
        component:Logon
    },
    {
        path:"/Commodity",
        component:Commodity
    }


]

const router = new VueRouter({
    routes
})

export default router