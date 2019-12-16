<template>
  <div id="app">
    <router-view></router-view>
    <div class="container">
      <content-a></content-a>
    </div>
    
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "./components/Tabbar"
import content from './components/Content'
export default {
  name: 'app',
  components:{
    "content-a":content,
    tabBar,
    
  }
}
</script>

<style>

  #app {
    display: flex;
    flex-direction: column
  }

  .container {
    flex-grow: 1;
    overflow: scroll
  }
</style>
