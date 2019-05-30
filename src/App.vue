<template>
  <div id="app">
    <header>
      <span class="title">Domos.</span>
      <div>
        <span class="allTxt headerContent">Nos appartements.</span>
        <span class="allTxt headerContent">Mes coups de Coeur.</span>
        <span class="allTxt headerContent">Me contacter.</span>
      </div>
      <div class="containerDeco">
        <div class="headerDeco" style="width: 20px; height: 20px;"></div>
        <div class="headerDeco" style="width: 40px; height: 40px;"></div>
      </div>
    </header>
    <home></home>
  </div>
</template>

<script>
import home from "./components/home.vue";

export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.allTxt {
  font-size: 1rem;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.5;
}
</style>

<style scoped>

header {
  position: relative;
  padding: 16px;
  background: #24292e;
  display: flex;
  align-items: baseline;
  align-content: flex-end;
}

.title {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 32px;
}

.headerContent {
  color: silver;
}

.headerContent:not(:first-child){
  margin-left: 12px;
}

.headerDeco {
  border-radius: 50%;
  background: white;
  align-self: center;
  justify-content: flex-end;
}

.containerDeco {
  position: absolute;
  display: block;
  display: flex;
  right: 16px;
  align-self: center;
}

</style>