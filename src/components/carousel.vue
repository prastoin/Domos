<template>
    <div id="galerie" style="position: relative;">
        <transition-group
        :name="rlStatus"
        @after-leave="animate = false"
        @before-enter="animate = true"
        tag="div"
        class="galerie">
            <img 
            v-for="(image, i) in images"
            :src="image" 
            :key="i"
            v-show="i === index"
            style="object-fit: cover;"/>
        </transition-group>
        <div @click="slideRight" class="button right">&gt;</div>
        <div @click="slideLeft" class="button left">&lt;</div>
        <div class="navBar">
        <button
        :class="{active: n === index}"
        v-for="(key, n) in images"
        :key="key"
        @click="goTo(n)">
        </button>
    </div>
</div>

</template>

<script>
const images= [
    "https://vivreparis.fr/wp-content/uploads/2018/04/Pont_des_Arts_6e_Arrondissement_Paris_HDR_20140320_1-1-2.jpg",
    'https://blog-content.thestorefront.com/mag/wp-content/uploads/2017/02/image.jpg',
    './googlemaps.png'
];

export default {
    name: "carousel",
    data () {
        return {
            index: 0,
            images,
            rl: false,
            animate: false

        }
    },
    methods: {
    slideRight() {
        if (this.animate)
            return;
        this.rl = false;
        this.index= (this.index + 1 ) % this.images.length;
     },
     slideLeft() {
        if (this.animate)
            return;
        this.rl = true;
        this.index = (this.index + this.images.length - 1) % this.images .length;
     },
     goTo(n) {
         if (this.animate)
            return;
         this.rl = n < this.index ? true : false;
         this.index = n;
     }
    },
    computed: {
        rlStatus() {
            return (this.rl ? "l-slide" : "r-slide");
        }
    }
}
</script>

<style lang="stylus" scoped>
#galerie:hover {
    .navBar button {
        opacity: 1;
    }
    .button {
        opacity: 1;
    }
}

.navBar {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  button {
    margin: 0px 2px;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #000;
    opacity: 0;
    transition: all 0.5s ease;
    border-radius: 10px;
  }
  button.active {
    background-color: #FFF;
  }
}

.galerie {
    position: relative;
    height: 600px;
    width: 100%;
    overflow: hidden;
}

img {
    right: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    width: 5%;
    height: 100%;
    font-size: 1rem;
    position: absolute;
    background: silver;
    opacity: 0;
    transition: all 0.5s ease;
}

.left {
    left: 0;
    -webkit-mask-image: -webkit-gradient(linear, right top, left top, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,1))); 
}

.right {
    right: 0;
    -webkit-mask-image: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,1))); 
}

.r-slide-enter-active {
  animation: slideInRight 0.5s;
}

.r-slide-leave-active {
  animation: slideOutRight 0.5s;
}

.l-slide-enter-active {
  animation: slideInLeft 0.5s;
}

.l-slide-leave-active {
  animation: slideOutLeft 0.5s;
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slideOutRight {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slideOutLeft {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}
</style>
