<template>
    <div>
        <transition-group 
        name="slide-fade"
        tag="div"
        class="root"
        >
        <router-link
        v-for="(name, index) in names"
        :to="'flat/' + name"
        :key="name"
        class="container">
            <div id="txtContainer">
                <span>{{name}}</span>
            </div>
            <div id="flou"></div>
            <img
            id="photo"
            :src="images[index]"
            >
        </router-link>
        </transition-group>
    </div>
</template>

<script>
const names = ['Athos', 'AtHome', 'Domos'];
const images = ["https://www.parisianhome.com/media/photos/97476.jpg", "https://www.parisianhome.com/media/photos/97479.jpg", "https://www.parisianhome.com/media/photos/0_0061_OPqpQ0j.jpg"];

export default {
    name: "slide",
    data () {
        return {
            images,
            names
        }

    }
}
</script>

<style scoped lang="stylus">
.root {
    margin-top: 42px;
    margin-bottom: 42px;
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
        object-fit: cover;
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
