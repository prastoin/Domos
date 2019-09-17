<template>
    <div id="root">
        <div class="container">
            <div class="lightBoxContainer">
               <lightbox :images="imgs[flat_name]" :toDisplay="4"/>
            </div>
           <div class="description">
                <div class="infos">
                    <div class="left">
                        <span class="title">Description</span>
                        <p class="txtContainer">
                            <span>Batiment C second floor</span>
                            <span>Elevator <icon icon="times"/></span>
                            <span>Rooms: 2<br>1 canap-lit<br>1 lit double</span>
                            <span>bathroom: 1</span>
                            <span>Splited WC: <icon icon="check"/></span>
                            <span>Surface: 27m</span>
                        </p><br>
                        <span class="title">Include</span>
                        <p class="txtContainer">
                            <span>Draps and serviettes <icon icon="check"/></span>
                            <span>Internet <icon icon="check"/></span>
                            <span>Free phone <icon icon="check"/></span>
                            <span>Electricity <icon icon="check"/></span>
                            <span>Habitation assurance <icon icon="check"/></span>
                        </p>
                    </div>
                    <div class="right">
                        <span class="title">Equipements</span>
                        <p class="txtContainer">
                            <span>Lave-vaisselle<icon icon="check"/></span>
                            <span>Sèche-linge <icon icon="check"/></span>
                            <span>TV <icon icon="check"/></span>
                            <span>Lave-linge <icon icon="check"/></span>
                            <span>Canapé lit <icon icon="check"/></span>
                            <span>Sèche-cheveux <icon icon="check"/></span>
                            <span>Fer a repasser <icon icon="check"/></span>
                            <span>Micro-ondes<icon icon="check"/></span>
                            <span>Fer a repasser <icon icon="check"/></span>
                            <span>Four <icon icon="check"/></span>
                            <span>Aspirateur <icon icon="check"/></span>
                        </p>
                    </div>
                </div>
               <div class="imgContainer">
                    <img class="map" src="../../public/localisation.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import lightbox from "@/components/lightbox.vue";

const imgs = {
    'Athos': [
        {
            src: '/C2/C2_LIVINGROOM_1.jpeg',
            poids: 'https://picsum.photos/675/447'
        },
        {
            src: '/C2/C2_LIVINGROOM_2.jpeg',
            poids: 'https://picsum.photos/674/447'
        },
        {
            src: '/C2/C2_LIVINGROOM_3.jpeg',
            poids: 'https://picsum.photos/673/447'
        },
        {
            src: '/C2/C2_KITCHEN.jpeg',
            poids: 'https://picsum.photos/672/447'
        },
        {
            src: '/C2/C2_CORRIDOR.jpeg',
            poids: 'https://picsum.photos/673/447'
        },
        {
            src: '/C2/C2_BEDROOM_1.jpeg',
            poids: 'https://picsum.photos/673/447'
        },
        {
            src: '/C2/C2_BEDROOM_2.jpeg',
            poids: 'https://picsum.photos/673/447'
        },
        {
            src: '/C2/C2_BATHROOM_1.jpeg',
            poids: 'https://picsum.photos/673/447'
        },
        {
            src: '/C2/C2_BATHROOM_2.jpeg',
            poids: 'https://picsum.photos/673/447'
        },
 
    ],
    'AtHome': [
         {
            src: 'https://picsum.photos/1000/1000',
            poids: 'https://picsum.photos/675/447'
        },
        {
            src: 'https://picsum.photos/674/447',
            poids: 'https://picsum.photos/674/447'
        },
        {
            src: 'https://picsum.photos/673/447',
            poids: 'https://picsum.photos/673/447'
        },
        {
            src: 'https://picsum.photos/672/447',
            poids: 'https://picsum.photos/672/447'
        }
    ],
    'Domos': [
        {
            src: 'https://www.parisianhome.com/media/photos/21209_6Amzt11.jpg',
        },
        {
            src: 'https://www.parisianhome.com/media/photos/97476.jpg',
        },
        {
            src: 'https://www.parisianhome.com/media/photos/97479.jpg',
        },
        {
            src: 'https://www.parisianhome.com/media/photos/0_0061_OPqpQ0j.jpg',

        },
        {
            src: 'https://picsum.photos/675/447',
            poids: 'https://picsum.photos/675/447'
        },
        {
            src: 'https://picsum.photos/674/447',
            poids: 'https://picsum.photos/674/447'
        },
        {
            src: 'https://picsum.photos/673/447',
            poids: 'https://picsum.photos/673/447'
        },
        {
            src: 'https://picsum.photos/672/447',
            poids: 'https://picsum.photos/672/447'
        }
    ]
}

export default {
    name: "flat",
    props: [
        'flat_name'
    ],
    data () {
        return {
        imgs
        }
    },
    components: {
        lightbox
    },
    methods:  {
        resetScroll(){
          window.scrollTo(0,0);
        }
    },
    computed: {
        check () {
            return (<icon icon="check"/>)
        },
        cross () {
            return (<icon icon="times"/>);
        }
    },
    mounted() {
        this.resetScroll();
    }
}
</script>

<style lang="stylus" scoped>

#root {
    background: white;
    height: 100%;
    .container {
        margin-top: 36px;
        margin-bottom: 36px;
        margin-left: auto;
        margin-right: auto;
        max-width: 1480px;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
        .lightBoxContainer {
            margin: 32px auto;
        }
    }
}

.description {
    width: 100%;
    max-width: 1312px;
    align-self: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px;
   .infos {
        padding: 6px;
        width: 50%;
        display: flex;
        text-align: left;
        justify-content: space-between;
        .right {
            margin-left: 9px;
        }
        .txtContainer {
            display: flex;
            flex-direction: column;
        }
    }
    .imgContainer {
        width: 50%;
        min-width: 400px;
        display: flex;
        justify-content: flex-end;
        .map {
            width: 400px;
            height: auto;
            object-fit: contain;
        }
    }
}

.title {
    z-index: 0;
    text-align: center;
    background-color: #24292e;
    color: white;
    display: block;
    clip-path: polygon(0 100%, 10% 0, 100% 0, 90% 100%)
}

span {
    font-size: 1.1rem;
}

@media screen and (max-width: 1353px) {
    .lightBoxContainer {
        max-width: 95vw;
    }
}

@media screen and (max-width: 831px) {
    .imgContainer {
        min-width: 300px !important;
    }
    .map {
        width: 300px !important;
    }
}

@media screen and (max-width: 750px) {
    .description  {
        justify-content: center;
    }
    .map {
        width: 200px !important;
    }
    .imgContainer {
        min-width: 200px !important;
        justify-content: center !important;
    }
    .infos {
        width: 100% !important;
    }
    span {
        font-size: 0.9rem;
    }
}

</style>
