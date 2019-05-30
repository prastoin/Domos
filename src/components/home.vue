<template>
    <div id="root">
        <div style="background: silver;">
            <p class="welcome">Bienvenue</p> 
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
                <span @click="slideRight" class="button right">&gt;</span>
                <span @click="slideLeft" class="button left">&lt;</span>
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
    </div>
</template>

<script>

const images= [
    'https://picsum.photos/1480/600',
    'https://picsum.photos/1480/600',
    'https://picsum.photos/1480/600'
];

export default {
    name: "home",
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
    font-size: 1rem;
    border-radius: 5px;
    position: absolute;
    padding: 6px 12px;;
    background: silver;
    opacity: 0;
    tranition: all 0.5s ease;
    border: 1px solid white;
}

.left {
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
}

.right {
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
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
