import Vue from "vue"
import Vuex from 'vuex';
// import Axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
       userinformation:{
           username:"jinyong",
           passworld:"123"
       },
       obj:{},
       gouListObj:{},
       newlist:[],
       list: [
        {
          img:
            "https://res0.vmallres.com/pimages//wapFrontLocation/content/2jT753IeBsCTOJ7Qqngj.jpg",
          name: "HUAWEI nova 5 Pro",
          price: "￥2699",
          lodPrice: "",
          activty: "4800万AI四摄",
        num:0,
            checked:false
        },
        {
          img:
            "https://res0.vmallres.com/pimages//wapFrontLocation/content/c2g7OGsVaqREjHkU3rh2.jpg",
          name: "荣耀20青春版",
          price: "1099",
          lodPrice: "1399",
          activty: "最高优惠300",
            num:0,
            checked:false
        },
        {
          img:
            "https://res0.vmallres.com/pimages//wapFrontLocation/content/4DYVvuQTkeQHlxa1NGzg.jpg",
          name: "华为畅享10 Plus ",
          price: "￥1399",
          lodPrice: "",
          activty: "购机赠耳机",
            num:0,
            checked:false
        },
        {
          img:
            "https://res0.vmallres.com/pimages//wapFrontLocation/content/h6OXsIBJCoz1hVaVPSPj.jpg",
          name: "荣耀Note10",
          price: "￥1599",
          lodPrice: "¥1999",
          activty: "省600元赠配件到手1399起",
            num:0,
            checked:false
        }
      ]
    },

    mutations:{
        // getData(state, obj){
        //     state.newList = obj
        //     window.console.log(state.newList)
        // },
        // login(){
        // }
        ImgClick(state,index){
            state.obj = state.list[index]
            // window.console.log(state.obj)
        },

        addShopping(state,index){
          state.gouListObj = state.list[index]
          // window.console.log(state.gouListObj)
          window.console.log(state.newlist)
          
        }
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