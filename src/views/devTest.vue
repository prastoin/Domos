<template>
    <div class="container">
        <lightbox :images="lightImages" :size="'red'"/>
    </div>    
</template>

<script>
import lightbox from "../components/lightbox.vue";

const   lightImages = [
        {
            src: 'https://picsum.photos/675/447',
            poids: 1,
        },
        {
            src: 'https://picsum.photos/674/447',
            poids: 1,
        },
        {
            src: 'https://picsum.photos/674/447',
            poids: 1,
        },
        {
            src: 'https://picsum.photos/673/447',
            poids: 1,
        }
]

export default {
    components: {
        lightbox
    },
    data () {
        return {
            lightImages
        }
    },
    name: "test"
}
</script>

<style lang="stylus" scoped>

.container {
    margin-top: auto;
    margin-bottom: auto;
    max-width: 1480px;
    min-height: 70vh;
    margin-left: auto;
    margin-right: auto;
}

</style>
