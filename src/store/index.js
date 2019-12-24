import Vue from "vue"
import Vuex from 'vuex';
// import Axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
       userinformation:{
           username:"jinyong",
           passworld:"123"
       }
    },

    mutations:{
        // getData(state, obj){
        //     state.newList = obj
        //     window.console.log(state.newList)
        // },
        // login(){

        // }
    },
    // actions:{
    //     getNewData(context, val){
    //         //api请求
    //         Axios.get("http://localhost:3001/finde.json", val).then((res) => {
    //             let data = res.data
    //             window.console.log(data)
    //             window.console.log("111")
    //             context.commit("getData", data)
    //         })
    //     }
    // }
})

export default store