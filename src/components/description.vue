<template>
    <div class="description">
        <div class="infos">
            <div class="left">
                <span class="title">Description</span>
                <p class="txtContainer" style="flex-direction: column">
                    <span>{{ building }}</span>
                    <span>Elevator: <icon :icon="this.info.elevator ? 'check' : 'times'"/></span>
                    <span>{{ room }}</span>
                    <span>{{ bedroom }}</span>
                    <span>{{ bathroom }}</span>
                    <span v-show="this.info.sep_WC"> Separate WC: <icon :icon="this.info.sep_WC ? 'check' : 'times'"/></span>
                    <span>{{ surface }}m²</span>
                </p>
            </div>
            <div class="right">
                <span class="title">Equipements</span>
                <p class="txtContainer">
                    <span
                        v-for="(equipement, index) in this.info.equipement"
                        :key="index"
                        class="line"
                    >
                    <icon icon="check"/>
                    {{equipement}}
                    </span>
                </p>
            </div>
        </div>
        <div class="imgContainer">
            <img class="map" src="../../public/localisation.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'description',
    props: [
        'info',
    ],
    computed: {
        building() {
            return (`Building: ${this.info.building}`);
        },
        room() {
            return (`Room: ${this.info.room}`);
        },
        bathroom() {
            return (`Bathroom: ${this.info.bathroom}`);
        },
        surface() {
            return (`Surface: ${this.info.surface}`);
        },
        bedroom() {
            return (`Bedroom: ${this.info.bedroom}`);
        }
    }
}
</script>

<style lang="stylus" scoped>

.description {
    width: 100%;
    max-width: 1312px;
    align-self: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px;
   .infos {
        width: 65%;
        padding: 6px;
        display: flex;
        text-align: left;
        justify-content: space-between;
        .left {
            width: 30%;
        }
        .right {
            width: 60%;
            margin-left: 9px;
        }
        .txtContainer {
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            .line {
                padding: 2px;
                white-space: nowrap;
                width: 50%;
                overflow-x: auto;
            }
        }
    }
    .imgContainer {
        width: 400px;
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