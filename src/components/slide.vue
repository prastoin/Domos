<template>
    <div >
        <transition-group 
        name="slide-fade"
        tag="div"
        class="root"
        >
        <div 
        v-for="i in 3"
        :key="i"
        class="container">
            <div id="txtContainer">
                <span>AtHome.</span>
            </div>
            <div id="flou"></div>
            <div id="photo"></div>
        </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "slide"
}
</script>

<style scoped lang="stylus">
.root {
    margin: 32px 0;
    padding: 16px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.container {
    margin: 32px;
    flex: wrap;
    display: flex;
    width: 400px;
    height: 250px;
    position: relative;
    #txtContainer {
        position: relative;
        -webkit-mask-image: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.8))); 
        width: 50%;
        height: 100%;
        opacity: 0.8;
        z-index: 3;
        background: black;
        transition: 0.5s all ease-in;
        span {
            z-index: 4;
            position:absolute;
            top: 50%;
            left: 50%;
            font-size: 2rem;
            color: white;
            font-weight: bold;
            -webkit-mask-image: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.2)), to(rgba(0,0,0,1))); 
            transform: translate(-50%, -50%);
        }
    }
    #flou {
        z-index: 2;
        opacity: 0.5;
        background: silver;
        width: 10%;
        height: 100%;
        transition: 0.5s all ease;
    }
    #photo {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-image: url('https://picsum.photos/400/250')
    }
}

.container:hover {
    #txtContainer {
        width: 40%;
    }
    #flou {
        width: 0%;
    }
}

/*.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}*/

</style>
