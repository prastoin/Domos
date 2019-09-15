<template>
    <div id="root">
        <div class="container">
            <div class="lightBoxContainer">
               <lightbox :images="imgs[flat_name]" :toDisplay="4"/>
            </div>
           <div class="description">
                <div class="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Ascenseur</th>
                                <th>Apero</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> 
                                <td>Etage: 1</td>                               
                                <td>Etage: 2</td>                               
                                <td>Etage: 3</td>                               
                            </tr>
                        </tbody>
                    </table>
                </div>
               <div class="imgContainer">
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
    mounted() {
        this.resetScroll();
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
    width: 100%;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.lightBoxContainer {
    margin: 32px auto;
    max-width: 1282px;
    border: 1px solid black;
}

.description {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 16px;
    .tableContainer {
        width: 50%;
        table {
            width: 80%;
            background: white;
//            border-collapse: collapse;
            thead {
                background: red;
            }
        }
    }
    .imgContainer {
        width: 475px;
        height: 460px;
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
}

</style>
