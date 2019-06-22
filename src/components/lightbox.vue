<template>
    <div class="root">
        <img
        v-for="(img, index) in images"
        :src="img.src"
        :key="index"
        @click="visible = !visible; selected = index"
        />
        <div class="highlight"
        :style="'display: ' + (visible ? 'block;' : 'none;')"
        @click="visible = !visible">
                <img :src="images[selected].src">
        </div>
    </div>    
</template>

<script>
export default {
    props: ["images", "size"],
    data () {
        return {visible: false, selected: 0}
    },
    name: "lightbox"
}
</script>

<style lang="stylus" scoped>
/*img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}*/    

.root {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.highlight {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    color: black;
    background: rgba(0,0,0,0.8);
    img {
        position: absolute;
        top: 50%;
        opacity: 1;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
}
</style>
