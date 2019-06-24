<template>
    <div class="root">
        <div class="absoluteContainer" 
        tabindex="-1"
        @keyup.esc="switchV(visible)"
        :style="assignV(visible)">
            <div class="highlight"
            :style="assignV(visible)">
                <div id="cross" class="close"
                @click="switchV(visible)"></div>
                <div style="position: absolute; top:50%; left: 10%; transform: translateY(-50%); z-index: 10;"><span
                class="arrow arrow-left"
                @click="decrSelected()"></span></div>
                <div style="position: absolute; top:50%; right: 10%; transform: translateY(-50%); z-index: 10;"><span
                class="arrow arrow-right"
                @click="incrSelected()"></span></div>
                <img :src="images[selected].src">
                <div class="iconsBar">
                    <div class="container"
                    v-for="(img, index) in images"
                    :key="index"
                    :style="index === selected ? 'transform: scale(1.2); border: 2px solid white;' : ''">
                        <img :src="images[index].src" @click="selected = index">
                    </div>
                </div>
            </div>
        </div>
        <img
        v-for="(n, i) in toDisplay"
        :src="images[i].src"
        :key="i"
        @click="switchV(visible); selected = i"
        />
    </div>    
</template>

<script>

export default {
    props: ["images", "toDisplay"],
    data () {
        return {visible: false, selected: 0}
    },
    methods: {
        switchV(visible) {
            this.visible = !visible;
        },
        assignV(visible)
        {
            return ('display: ' + (visible ? 'block;' : 'none;'));
        },
        incrSelected()
        {
            this.selected = (this.selected + 1) % this.images.length;
        },
        decrSelected()
        {
            this.selected = (this.selected - 1) % this.images.length;
            while (this.selected < 0)
                this.selected += this.images.length;
        }
    },
    name: "lightbox"
}
</script>

<style lang="stylus" scoped>

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

.absoluteContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    .highlight {
        top: 0;
        width: 100vw;
        height: 100vh;
        position: -webkit-sticky;
        position: sticky;
        color: black;
        background: rgba(0,0,0,0.8);
        img {
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            max-width: 100%;
            height: auto;
            position: absolute;
            opacity: 1;
            object-fit: cover;
        }
    }
}

.arrow {
    z-index: 5;
    opacity: 0.7;
    transition: all 0.3s ease;
    width: 60px;
    height: 60px;
    position: relative;
    display: inline-block;
    margin: 15px 15px;
    &:hover{
        opacity: 1;
    }
}
.arrow:before, .arrow:after {
    content: '';
    border-color: transparent;
    border-style: solid;
    position: absolute;
}
.arrow-left:before {
    border: none;
    background-color: #FFF;
    height: 30%;
    width: 50%;
    top: 35%;
    left: 50%;
}
.arrow-left:after {
    left: -50%;
    top: 0;
    border-width: 30px 30px;
    border-right-color: #FFF;
}
.arrow-right:before {
    border: none;
    background-color: #FFF;
    height: 30%;
    width: 50%;
    top: 35%;
    left: 0;
}
.arrow-right:after {
    left: 50%;
    top: 0;
    border-width: 30px 30px;
    border-left-color: #FFF;
}

.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.8;
  z-index: 5;
  &:hover{
      opacity: 1;
  }
}
.close:before, .close:after {
  position: absolute;
  left: 20px;
  content: ' ';
  height: 38px;
  width: 4px;
  background-color: #FFF;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.iconsBar {
    position: absolute;
    bottom: 1%;
    left: 50%;
    width: 50vw;
    height: 8vh;
    display: flex;
    justify-content: center;
    transform: translateX(-50%);
    .container {
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        width: 15%;
        height: 100%;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }
}
</style>