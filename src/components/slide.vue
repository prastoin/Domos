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
const names = ['Aramis', "D'Artagnan", 'At\'Home'];
const images = ["/C2/C2_LIVINGROOM_2.jpeg", "/C4/C4_LIVINGROOM_3.jpeg", "/B4/B4_KITCHEN_5.jpeg"];

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
    margin-top: 36px;
    margin-bottom: 36px;
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
    width: 380px;
    height: 230px;
    position: relative;
    #txtContainer {
        position: relative;
        -webkit-mask-image: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.8))); 
        width: 53%;
        height: 100%;
        opacity: 0.8;
        z-index: 3;

        background: black;
        transition: 1s all ease-in;
        span {
            z-index: 4;
            position:absolute;
            top: 50%;
            left: 50%;
            font-size: 1.6rem;
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
        transition: 1s all ease;
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
        width: 45%;
    }
    #flou {
        width: 0%;
    }
}

</style>
