<template>
  <div id="app">
    <MyHeader/>
    <router-view/>
    <myfooter/>
  </div>
</template>

<script>
import MyHeader from "./components/header.vue";
import Myfooter from "./components/footer.vue";

export default {
  name: 'app',
  components: {
    MyHeader,
    Myfooter
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color: #2c3e50;
  position: relative;
  display: flex;
  flex-direction: column;
}

#nav
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.allTxt {
  font-size: 1rem;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.5;
}
</style>