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
                    :id="index"
                    :style="index === selected ? 'transform: scale(1.1);' : ''">
                        <img class="iconImg" :src="images[index].src" @click="iconClick(index)" :style="index === selected ? 'border: 1.5px solid white;' : ''">
                    </div>
                </div>
            </div>
        </div>
        <!-- Printed images on parent overlay-->
        <div>
            <template v-for="(index, i) in 2">
                <div class="line" :key="i">
                    <div
                        v-for="(n, j) in 2"
                        class="cell"
                        :key="n"
                    >
                        <img
                            class="printed"
                            :id="i * 2 + j"
                            :src="images[i * 2 + j].src"
                            :key="j"
                            @click="switchV(visible, i * 2 + j)"
                        />
                    </div>
                </div>
           </template>
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
        switchV(visible, i) {
            this.visible = !visible;
            if (i !== undefined) this.selected = i; 
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
        iconClick (index) {
            document.getElementById(index).focus();
            this.selected = index;
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
    z-index: 10;
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
            transform: translate(-50%, -50%);
            left: 50%;
            top: 45%;
            max-width: 70%;
            max-height: 80%;
            opacity: 1;
            object-fit: contain;
        }
        .iconsBar {
            z-index: 10;
            position: absolute;
            bottom: 2%;
            left: 50%;
            transform: translate(-50%, 0);
            margin: 0 auto;
            width: 90vw;
            height: 12vh;
            display: flex;
            overflow: scroll;
            overflow-y: visible;
            padding-top: 6px;
            .container {
                position: relative;
                margin-left: 10px;
                margin-right: 10px;
                flex: 0 0 130px;
                height: 90%;
                .iconImg {
                    z-index: 99;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .container:first-child {
                padding-left: 9px;
                margin-left: auto;
            }
            .container:last-child {
                padding-right: 9px;
                margin-right: auto;
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

@media screen and (max-width: 750px) {
   .main {
       max-width: 90% !important;
       max-height: 90% !important;
   } 
}
.iconsBar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(0, 0, 0, 0, 0.8); /* or add it to the track */
}
.iconsBar::-webkit-scrollbar-thumb {
    background: grey;
    opacity: 0.6;
    border-radius: 10px;
}
</style>