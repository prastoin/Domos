<template>
<div>
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
</div>
</template>

<script>
export default {
    name: "header"

}
</script>

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
