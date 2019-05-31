<template>
    <div id="root">
        <div style="background: silver;">
            <p class="welcome" >Bienvenue</p> 
        </div>
        <div class="container">
            <p class="allTxt">Mon coup de coeur du moment</p>
            <div id="galerie" style="position: relative;">
                <transition-group
                :name="rlStatus"
                @after-leave="animate = false"
                @before-enter="animate = true"
                tag="div"
                class="galerie"
                >
                    <img 
                    v-for="(image, i) in images"
                    :src="image" 
                    :key="i"
                    v-show="i === index"/>
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
        </div>
        <slide/>
    </div>
</template>

<script>

import slide from "./slide.vue"

const images= [
    'https://picsum.photos/1480/600',
    'https://picsum.photos/1480/600',
    'https://picsum.photos/1480/600'
];

export default {
    name: "home",
    components: {
        slide
    },
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
        console.log(this.index);
     },
     slideLeft() {
        if (this.animate)
            return;
        this.rl = true;
        this.index = (this.index + this.images.length - 1) % this.images .length;
        console.log(this.index);
     },
     goTo(n) {
         console.log(n);
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

<style scoped lang="stylus">

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
    margin-bottom: 24px;
    margin-right: auto;
    margin-left: auto;
    background: white;
    font-size: 1.5rem;
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
    tranition: all 0.5s ease;
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
