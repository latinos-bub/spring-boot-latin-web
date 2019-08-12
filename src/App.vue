<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>


<style lang="scss">
    @import "~normalize.css/normalize";
    // normalize.css 样式格式化
    @import "./styles/index.scss"; // 全局自定义的 css 样式
</style>


<!--<style>-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: center;-->
<!--color: #2c3e50;-->
<!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
