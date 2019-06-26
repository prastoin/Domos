<template>
    <div id="root">
        <div style="background: silver;">
            <p class="welcome">Welcome</p> 
        </div>
        <div class="container">
            <p class="allTxt">Mon coup de coeur du moment</p>
            <carousel/>
        </div>
        <slide/>
    </div>
</template>

<script>

import slide from "../components/slide.vue";
import carousel from "../components/carousel.vue";

export default {
    name: "home",
    components: {
        carousel,
        slide
    },
}
</script>

<style scoped lang="stylus">

.container {
    max-width: 1480px;
    margin-right: auto;
    margin-left: auto;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    position: relative;
}

.welcome {
    max-width: 1280px;
    margin-top: 36px;
    margin-bottom: 36px;
    margin-right: auto;
    margin-left: auto;
    background: white;
    font-size: 1.5rem;
    text-decoration: underline;
}
</style>
