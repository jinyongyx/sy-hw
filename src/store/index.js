import Vue from "Vue"
import Vuex from "vuex"
import Axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        arr:[]
    },

    mutations:{
        getData(state, obj){
            state.newList = obj
            window.console.log(state.newList)
        }
    },
    actions:{
        getNewData(context, val){
            //api请求
            Axios.get("http://localhost:3001/finde.json", val).then((res) => {
                let data = res.data
                window.console.log(data)
                context.commit("getData", data)
            })
        }
    }
})

export default store