<template>
    <div id="root">
        <div class="container">
           <div class="lightBoxContainer">
             <img 
                v-for="(image, n) in imgs[flat_name]"
                :key="n"
                :src="image.name" 
                :alt="flat_name">
            </div>
            <!-- <lightbox id="mylightbox"
                ref="lightbox"
                :images="imgs[flat_name]"
                :filter="galleryFilter"
                :directory="thumbnailDir"
                :timeoutDuration="5000"
                @click="showLightbox(imgs[flat_name].name)"
            ></lightbox> -->
            <div class="description">
                <p class="allTxt">Il ya tant de chambres<br>
                    les animaux sont interdits<br>
                    Espace non fumeur<br>
                    2 salle de bain<br>
                    Une terrasse<br>
                    cuisine equipee<br>
                    Derniere etage sans ascenceur<br>
                </p>
                <iframe src="https://www.google.com/maps/d/embed?mid=1_QD14qh1xixRtaperPTocbUanJPQQaOD" width="640" height="480"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
const imgs = {
    'Athos': [
        {
            name: 'https://picsum.photos/675/447',
            id: 'https://picsum.photos/675/447'
        },
        {
            name: 'https://picsum.photos/675/447',
            id: 'https://picsum.photos/675/447'
        },
        {
            name: 'https://picsum.photos/675/447',
            id: 'https://picsum.photos/675/447'
        },
        {
            name: 'https://picsum.photos/675/447',
            id: 'https://picsum.photos/675/447'
        }
    ],
    'Athome': [
        {
            name: 'https://picsum.photos/675/447',
            id: 'https://picsum.photos/675/447'
        },
        {
            name: 'https://picsum.photos/675/447',
            id: 'https://picsum.photos/675/447'
        },
        {
            name: 'https://picsum.photos/675/447',
            id: 'https://picsum.photos/675/447'
        },
        {
            name: 'https://picsum.photos/675/447',
            id: 'https://picsum.photos/675/447'
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
        },
        {
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
    justify-content: space-between;
    flex-direction: column;
    width: 100vw;
    background: silver;
}

.lightBoxContainer {
    padding: 36px;
    max-width: 1680px;
    img {
        object-fit: contain;
    }
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
</style>
