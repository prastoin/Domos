<template>
    <div class="root">
        <!-- Not visibile layer -->
        <div class="absoluteContainer" 
        tabindex="-1"
        :style="assignV(visible)">
            <div class="highlight"
            :style="assignV(visible)">
                <div id="cross" class="close"
                @click="switchV(visible)"></div>
                <div class="selectedContainer">
                    <div style="position: absolute; top:45%; left: 10%; transform: translateY(-50%); z-index: 10;">
                        <icon class="arrow" icon="arrow-left" @click="decrSelected()"/>
                    </div>
                    <div style="position: absolute; top:45%; right: 10%; transform: translateY(-50%); z-index: 10;">
                        <icon class="arrow" icon="arrow-right" @click="incrSelected()"/>
                    </div>
                    <img class="main" :src="images[selected].src">
                </div>
                <div class="iconsBar">
                    <div class="container"
                    v-for="(img, index) in images"
                    :key="index"
                    :style="index === selected ? 'transform: scale(1.2);' : ''">
                        <img class="iconImg" :src="images[index].src" @click="selected = index" :style="index === selected ? 'border: 1.5px solid white;' : ''">
                    </div>
                </div>
            </div>
        </div>
        <!-- Printed images on parent overlay-->
        <div>
            <div class="line">
                <div v-for="(n, i) in 2"
                class="cell"
                :key="n">
                    <img
                    class="printed"
                    :src="images[i].src"
                    :key="i"
                    @click="switchV(visible);
                    selected = i"/> 
                </div>
            </div>
            <div class="line">
                <div v-for="(n, i) in 2"
                class="cell"
                :key="n">
                    <img class="printed"
                    :src="images[i + 2].src"
                    :key="i + 2"
                    @click="switchV(visible);
                    selected = i + 2"/> 
                </div>
            </div>
        </div>
   </div>    
</template>

<script>

export default {
    props: ["images", "toDisplay"],
    name: "lightbox",
    data() {
        return {
            visible: false,
            selected: 0
        }
    },
    methods: {
        switchV(visible) {
            this.visible = !visible;
        },
        assignV(visible)
        {
            return ('display: ' + (visible ? 'table-cell;' : 'none;'));
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
        },
        onKey({ key }) {
            if (!this.visible)
                return;
            if (key === 'ArrowRight')
                this.incrSelected();
            else if (key === 'ArrowLeft')
                this.decrSelected();
            else if (key === 'Escape')
                this.switchV(this.visible);
        }
    },
    mounted() {
        document.addEventListener('keydown', this.onKey);
    },
    destroyed() {
        document.removeEventListener('keydown', this.onKey);
    }
}
</script>

<style lang="stylus" scoped>

.root {
    max-width: 1312px;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    .line {
        height: 50%;
        display: flex;
        .cell {
            outline: 1.5px solid black;
            width: 100%;
            .printed {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

.absoluteContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    .highlight {
        position: absolute;
        top: 0;
        left:0;
        width: 100vw;
        height: 100vh;
        position: -webkit-sticky;
        position: sticky;
        color: black;
        background: rgba(0,0,0,0.8);
        .main {
            position: absolute;
            width: 1024px;
            height: 683px;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 45%;
            max-width: 70%;
            opacity: 1;
            object-fit: contain;
        }
        .iconsBar {
            position: absolute;
            bottom: 5%;
            left: 50%;
            transform: translate(-50%, 0);
            margin: 0 auto;
            width: 90vw;
            height: 8vh;
            display: flex;
            justify-content: center;
            .container {
                position: relative;
                margin-left: 10px;
                margin-right: 10px;
                width: 10%;
                height: 100%;
                .iconImg {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}

.arrow {
    color: white;
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

@media screen and (max-width: 1353px) {
    
}

</style>