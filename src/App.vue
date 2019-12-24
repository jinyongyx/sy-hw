<template>
  <div id="app">
    <router-view></router-view>
    <tabBar v-if="$route.meta.isshow"></tabBar>
  </div>
</template>

<script>
import tabBar from "./components/Tabbar.vue";
export default {
  name: "app",
  components: {
    tabBar
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between
}
</style>
