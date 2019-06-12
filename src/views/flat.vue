<template>
    <div id="root">
        <div class="container">
            <div class="description">
                <span>
        {{flat_name}}
                </span>
                <p class="allTxt">Il ya tant de chambres<br>
                les animaux sont interdits<br>
                Espace non fumeur<br>
                2 salle de bain<br>
                Une terrasse<br>
                cuisine equipee<br>
                Derniere etage sans ascenceur<br>
                </p>
            </div>
            <iframe src="https://www.google.com/maps/d/embed?mid=1_QD14qh1xixRtaperPTocbUanJPQQaOD" width="640" height="480"></iframe>
        </div>
        <div>
            <img 
            v-for="image in imgs[flat_name]"
            :key="image"
            :src="image.name" 
            :alt="flat_name">
        </div>
       <lightbox id="mylightbox"
            ref="lightbox"
            :images="imgs[flat_name]"
            :filter="galleryFilter"
            :directory="thumbnailDir"
            :timeoutDuration="5000"
            @click="showLightbox(imgs[flat_name].name)"
        ></lightbox>
    </div>
</template>

<script>
const imgs = {
    'Athos': [
        {
            name: 'https://picsum.photos/200/300',
            id: 'https://picsum.photos/200/300'
        },
        {
            name: 'https://picsum.photos/200/300',
            id: 'https://picsum.photos/200/300'
        },
        {
            name: 'https://picsum.photos/200/300',
            id: 'https://picsum.photos/200/300'
        }
    ],
    'Athome': [
        {
            name: 'https://picsum.photos/200/300',
            id: 'https://picsum.photos/200/300'
        },
        {
            name: 'https://picsum.photos/200/300',
            id: 'https://picsum.photos/200/300'
        },
        {
            name: 'https://picsum.photos/200/300',
            id: 'https://picsum.photos/200/300'
        }
    ],
    'Domos': [
        {
            name: 'https://www.parisianhome.com/media/photos/21209_6Amzt11.jpg',
            id: 'https://www.parisianhome.com/media/photos/21209_6Amzt11.jpg'
        },
        {
            name: 'https://www.parisianhome.com/media/photos/21209_6Amzt11.jpg',
            id: 'https://www.parisianhome.com/media/photos/21209_6Amzt11.jpg'
        },           {
            name: 'https://www.parisianhome.com/media/photos/21209_6Amzt11.jpg',
            id: 'https://www.parisianhome.com/media/photos/21209_6Amzt11.jpg'
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
    methods: {
       showLightbox: function(imageName) {
           console.log('coucou');
           this.$refs.lightbox.show(imgs[flat_name].name);
       }
    }
}
</script>

<style lang="stylus" scoped>

#root {
    background: red;
    height: 100%;
}

.container {
    margin-top: 36px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1480px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    background: silver;
}

.description {
    display: flex;
    justify-content: left;
    padding: 16px;
    p {
        text-align: left;
    }
}
</style>
