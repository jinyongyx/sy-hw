<template>
  <div class="input">
    <div class="input-top">
      <i class="iconfont icon-arrow-left" @click="goback"></i>
      <div class="input-text">
        <input type="text" placeholder="nova 6" v-model="search" />
        <i class="iconfont icon-sousuo1"></i>
      </div>
      <span class="span" @click="Search">搜索</span>
    </div>

    <div class="div-p">
      <p>热门搜索</p>
    </div>
    <div v-if="searchData.length>0" class="list">
      <ul v-for="(item, index) in searchData" :key="index">
        <li>
          <span>{{item.text}}</span>
          <span>{{item.contact_name}}</span>
          <span>{{item.address}}</span>
          <span>{{item.phone}}</span>
        </li>
      </ul>
    </div>

    <div v-else>
      <div class="remen">
        <div class="one aaa">nova 6</div>
        <div class="one">荣耀V30 5G</div>
        <div class="one">荣耀V30 5G</div>
        <div class="one">荣耀20</div>
      </div>

      <div class="remen-one">
        <div class="one aaa">Mate 30</div>
        <div class="one aaa">荣耀9X</div>
        <div class="one">nova 5z</div>
        <div class="one">荣耀20青春版</div>
      </div>

      <div class="remen-two">
        <div class="one">FreeBuds 3</div>
        <div class="one">HUAWEI Sound X</div>
        <div class="one aaa">荣耀20S</div>
      </div>

      <div>
          <ul>
        <li v-for="(item, index) in pushData" :key="index">
          <span>{{item}}</span>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      list: [],
      searchData: [],
      pushData:[]
    };
  },
  created() {
    this.getList();
  },

  methods: {
    goback() {
      this.$router.go(-1);
    },

    getList() {
      var that = this;
      setTimeout(function() {
        window.console.log("11");
        let xhr = new XMLHttpRequest();
        xhr.open("get", "http://localhost:3000/search.json");
        xhr.send();
        xhr.addEventListener("load", function() {
          let date = JSON.parse(xhr.response);
          let arr = date.result.list;
          that.list = arr;
          window.console.log(that.list);
        });
      }, 1000);

      window.console.log(this.list);

     
    },

    Search() {
        var search = this.search;
        // this.pushData.push(this.searchData)
        // localStorage.setItem("pushData",JSON.stringify(this.searchData))
      
      if (search) {
        this.searchData = this.list.filter(function(product) {
          return Object.keys(product).some(function(key) {
            return (
              String(product[key])
                .toLowerCase()
                .indexOf(search) > -1
            )
          })
        })
      }
    }
  },
  // mounted(){
  //     this.pushData = localStorage.getItem("pushData")
  // }
};
</script>

<style scoped>
.aaa {
    color: red;
}
.one {
  padding: 5px;
  border: none;
  background: #f9f9f9;
  margin-right: 5px;
  font-size: 12px;
}
.remen-one {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10px;
}
.remen-two {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10px;
}
.remen {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.list {
  width: 95%;
  margin: 0 auto;
}

.list ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.list ul li {
  width: 100%;
  border-bottom: 1px solid #cccccc;
  padding: 15px;
}

.div-p {
  width: 95%;
  margin: 0 auto;
  font-size: 12px;
}
.div-p p {
  padding: 10px;
  font-size: 14px;
}
.input {
  width: 100%;
}
.input-top {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
}
.input-text {
  width: 70%;
  position: relative;
  background: #f5f5f5;
  border-radius: 10px;
  display: flex;
}
.input-text input {
  width: 80%;
  padding: 5px;
  margin: 0 auto;
  border: none;
  background: #f5f5f5;
  border-radius: 10px;
}
.icon-sousuo1 {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #cccccc;
}
input::-webkit-input-placeholder {
  padding-left: 20px;
  color: #cccccc;
}
.span {
  font-size: 13px;
}
</style>