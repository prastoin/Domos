<template>
    <div id="root">
        <div class="container">
            <div class="description">
                <p class="allTxt">Il ya tant de chambres<br>
                les animaux sont interdits<br>
                Espace non fumeur<br>
                2 salle de bain<br>
                Une terrasse<br>
                cuisine equipee<br>
                Derniere etage sans ascenceur<br>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import LightBox from 'vue-image-lightbox';

const imgs = [
  {
    thumb: 'https://picsum.photos/200/300',
    src: 'https://picsum.photos/200/300'
  },
  {
    thumb: 'https://picsum.photos/200/300',
    src: 'https://picsum.photos/200/300'
  },
  {
    thumb: 'https://picsum.photos/200/300',
    src: 'https://picsum.photos/200/300'
  },
  {
    thumb: 'https://picsum.photos/200/300',
    src: 'https://picsum.photos/200/300'
  }
];

export default {
    name: "flat",
    components: {
        LightBox
    },
    data () {
        imgs
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
