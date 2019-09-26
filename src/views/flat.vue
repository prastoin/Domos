<template>
    <div id="root">
        <div class="container">
            <span style="font-size: 1.5rem; align-self: center">
                {{ flat_name }}
            </span>
            <div class="lightBoxContainer">
               <lightbox :images="imgs[flat_name]" :toDisplay="4"/>
            </div>
            <description :info="infos[flat_name]"/>
        </div>
    </div>
</template>

<script>
import lightbox from "@/components/lightbox";
import description from "@/components/description";

const imgs = {
    'Aramis': [
        {
            src: '/C2/C2_LIVINGROOM_3.jpeg',
            print: '/C2/C2_LIVINGROOM_2.jpeg',
        },
        {
            src: '/C2/C2_LIVINGROOM_2.jpeg',
            print: '/C2/C2_KITCHEN.jpeg',
        },
        {
            src: '/C2/C2_KITCHEN.jpeg',
            print: '/C2/C2_LIVINGROOM_1.jpeg',
        },
        {
            src: '/C2/C2_LIVINGROOM_1.jpeg',
            print: '/C2/C2_BEDROOM_1.jpeg',
        },
        {
            src: '/C2/C2_CORRIDOR.jpeg',
        },
        {
            src: '/C2/C2_BATHROOM_1.jpeg',
        },
        {
            src: '/C2/C2_BATHROOM_2.jpeg',
        },
        {
            src: '/C2/C2_WC.jpeg',
        },
        {
            src: '/C2/C2_BEDROOM_1.jpeg',
        },
        {
            src: '/C2/C2_BEDROOM_2.jpeg',
        },
    ],
    'D\'Artagnan': [
        {
            src: '/C4/C4_CORRIDOR_1.jpeg',
            print: '/C4/C4_LIVINGROOM_3.jpeg',
        },
        {
            src: '/C4/C4_LIVINGROOM_1.jpeg',
            print: '/C4/C4_LIVINGROOM_4.jpeg',
        },
        {
            src: '/C4/C4_LIVINGROOM_2.jpeg',
            print: '/C4/C4_TERRASSE_2.jpeg',
        },
        {
            src: '/C4/C4_LIVINGROOM_3.jpeg',
            print: '/C4/C4_CORRIDOR_4.jpeg',
        },
        {
            src: '/C4/C4_CORRIDOR_2.jpeg',
        },
        {
            src: '/C4/C4_BEDROOM_5.jpeg',
        },
        {
            src: '/C4/C4_LIVINGROOM_4.jpeg',
        },
        {
            src: '/C4/C4_KITCHEN_1.jpeg',
        },
        {
            src: '/C4/C4_KITCHEN_2.jpeg',
        },
        {
            src: '/C4/C4_KITCHEN_3.jpeg',
        },
        {
            src: '/C4/C4_LIVINGROOM_5.jpeg',
        },
        {
            src: '/C4/C4_BATHROOM_2.jpeg',
        },
        {
            src: '/C4/C4_BATHROOM_3.jpeg',
        },
        {
            src: '/C4/C4_WC_1.jpeg',
        },
        {
            src: '/C4/C4_CORRIDOR_4.jpeg',
        },
        {
            src: '/C4/C4_BEDROOM_4.jpeg',
        },
        {
            src: '/C4/C4_BATHROOM_1.jpeg',
        },
        {
            src: '/C4/C4_BATHROOM_4.jpg',
        },
        {
            src: '/C4/C4_BEDROOM_1.jpeg',
        },
        {
            src: '/C4/C4_BEDROOM_2.jpeg',
        },
        {
            src: '/C4/C4_BEDROOM_6.jpeg',
        },
        {
            src: '/C4/C4_BEDROOM_3.jpeg',
        },
        {
            src: '/C4/C4_CORRIDOR_3.jpeg',
        },
        {
            src: '/C4/C4_TERRASSE_1.jpeg',
        },
        {
            src: '/C4/C4_TERRASSE_2.jpeg',
        },
    ],
    'AtHome': [
        {
            src: '/B4/B4_CORRIDOR_1.jpeg',
            print: '/B4/B4_LIVINGROOM_1.jpeg',
        },
        {
            src: '/B4/B4_WC_1.jpeg',
            print: '/B4/B4_TERRASSE_1.jpeg',
        },
        {
            src: '/B4/B4_CORRIDOR_2.jpeg',
            print: '/B4/B4_KITCHEN_4.jpeg',
        },
        {
            src: '/B4/B4_CORRIDOR_5.jpeg',
            print: '/B4/B4_CORRIDOR_6.jpeg',
        },
        {
            src: '/B4/B4_KITCHEN_1.jpeg',
        },
        {
            src: '/B4/B4_KITCHEN_2.jpeg',
        },
        {
            src: '/B4/B4_KITCHEN_3.jpeg',
        },
        {
            src: '/B4/B4_KITCHEN_4.jpeg',
        },
        {
            src: '/B4/B4_KITCHEN_5.jpeg',
        },
        {
            src: '/B4/B4_LIVINGROOM_1.jpeg',
        },
        {
            src: '/B4/B4_LIVINGROOM_2.jpeg',
        },
        {
            src: '/B4/B4_LIVINGROOM_5.jpeg',
        },
        {
            src: '/B4/B4_LIVINGROOM_3.jpeg',
        },
        {
            src: '/B4/B4_LIVINGROOM_6.jpeg',
        },
        {
            src: '/B4/B4_LIVINGROOM_4.jpeg',
        },
        {
            src: '/B4/B4_CORRIDOR_6.jpeg',
        },
        {
            src: '/B4/B4_BEDROOM_2.jpeg',
        },
        {
            src: '/B4/B4_BATHROOM_2.jpeg',
        },
        {
            src: '/B4/B4_BATHROOM_3.jpeg',
        },
        {
            src: '/B4/B4_BATHROOM_1.jpeg',
        },
        {
            src: '/B4/B4_BEDROOM_3.jpeg',
        },
        {
            src: '/B4/B4_BEDROOM_6.jpeg',
        },
        {
            src: '/B4/B4_BEDROOM_5.jpeg',
        },
        {
            src: '/B4/B4_CORRIDOR_3.jpeg',
        },
        {
            src: '/B4/B4_TERASSE_1.jpeg',
        },
        {
            src: '/B4/B4_TERASSE_3.jpeg',
        },
        {
            src: '/B4/B4_TERASSE_2.jpeg',
        },
    ]
}

const infos = {
    'Aramis': {
        building: 'C',
        elevator: false,
        room: 2,
        people: 2,
        bedroom: 1,
        bathroom: 1,
        surface: 30,
        terrace: false,
        sep_WC: 1,
        equipement: [
            'Double bed',
            'Oven',
            'TV',
            'Microwave',
            'Internet',
            'Dishwasher',
            'Wifi',
            'Dryer Washer',
            'Iron',
            'Refrigerator',
            'Hair dryer',
            'Vacuum cleaner',
            'Toaster',
        ]
    },
    'D\'Artagnan': {
        building: 'C',
        elevator: false,
        room: 3,
        people: 5,
        bedroom: 2,
        bathroom: 2,
        surface: 84,
        terrace: true,
        sep_WC: 1,
        equipement: [
            'Queen bed: 1',
            'Oven',
            'Single bed: 2',
            'Refrigerator',
            'Double bed: 1',
            'Microwave',
            'TV',
            'Dishwasher',
            'Internet',
            'Dryer Washer',
            'Wifi',
            'Toaster',
            'Vacuum cleaner',
            'Iron',
            'Air conditioner',
            'Hair dryer',
        ]
    },
    'AtHome': {
        building: 'B',
        elevator: false,
        room: 3,
        people: 5,
        bedroom: 2,
        bathroom: 2,
        surface: 87,
        terrace: true,
        sep_WC: 1,
        equipement: [
            'Queen bed: 1',
            'Oven',
            'Single bed: 2',
            'Refrigerator',
            'Double bed: 1',
            'Microwave',
            'TV',
            'Dishwasher',
            'Internet',
            'Dryer Washer',
            'Wifi',
            'Toaster',
            'Vacuum cleaner',
            'Iron',
            'Air conditioner',
            'Hair dryer',
        ]
    }
}

export default {
    name: "flat",
    props: [
        'flat_name'
    ],
    data () {
        return {
        imgs,
        infos
        }
    },
    components: {
        lightbox,
        description,
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
        max-width: 1280px;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
        .lightBoxContainer {
            margin: 32px auto;
        }
    }
}

@media screen and (max-width: 1353px) {
    .lightBoxContainer {
        max-width: 95vw;
    }
}

</style>
