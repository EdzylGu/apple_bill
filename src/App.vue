<template>
<div id="app">
    <router-view name="nav"></router-view>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "app",
};
</script>
<style>
#app {
    font-family: 'Bebas Neue', cursive,"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #F7F6F2;
}
</style>
