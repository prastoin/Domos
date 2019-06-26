<template>
    <div id="root">
        <div class="container">
            <div class="lightBoxContainer">
               <lightbox :images="imgs[flat_name]" :toDisplay="4"/>
            </div>
           <div class="description">
                <p class="allTxt">Il ya tant de chambres<br>
                    les animaux sont interdits<br>
                    Espace non fumeur<br>
                    2 salle de bain<br>
                    Une terrasse<br>
                    cuisine equipee<br>
                    Derniere etage sans ascenceur<br>
                </p>
                <div style="width: 640px; height: 480px;">
                    <img src="../../public/localisation.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import lightbox from "../components/lightbox.vue";

const imgs = {
    'Athos': [
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
    ],
    'AtHome': [
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
    }
}
</script>

<style lang="stylus" scoped>

#root {
    background: white;
    height: 100%;
}

.container {
    margin-top: 36px;
    margin-bottom: 36px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1480px;
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.lightBoxContainer {
    align-self: center;
    margin: 36px;
    max-width: 1282px;
    border: 1px solid black;
}

.description {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    p {
        padding-left: 36px;
        text-align: left;
    }
    iframe {
        right: 0;
        top: 0;
    }
}

.map {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
