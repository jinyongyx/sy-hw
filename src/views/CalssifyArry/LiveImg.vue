<template>
  <div class="LiveImg">
      <ul>
          <li v-for="(item,index) in list" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.text}}</p>
              <p>{{item.title}}</p>
              <p><span>{{item.time}}</span><span class="span">{{item.rading}}</span></p>
          </li>
      </ul>
      <div class="boomont">
          33
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            list:[]
        }
    },

    mounted(){
        let xhr = new XMLHttpRequest()
        xhr.open("get", " http://localhost:3000/finde.json")
        xhr.addEventListener("load", function(){
            let at = JSON.parse(xhr.response)
            // let xx = at.list
            window.console.log(this)
            window.console.log(at)
        })
        xhr.send()
    }
}
</script>

<style>
.LiveImg {
    width: 100%;
}
.LiveImg ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;

}
.LiveImg ul li {
    width: 100%;
}
.LiveImg ul li img {
    width: 100%;
    padding: 10px 10px 0px 10px;
    border-radius: 20px;
    height: 150px;
}

.LiveImg ul li p:nth-child(2) {
    font-size: 14.5px;
    color: #333;
    padding-left: 10px;
    padding-top: 10px;
}
.LiveImg ul li p:nth-child(3) {
    font-size: 12px;
    color: #333;
    padding-left: 10px;
    padding-top: 10px;
}

.LiveImg ul li p:nth-child(4) {
    font-size: 12px;
    color: #333;
    padding-left: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
}
.span {
    padding-right: 10px;
}

</style>