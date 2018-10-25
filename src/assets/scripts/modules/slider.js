import Vue from 'vue';

const info = {
    template: "#slider-info",
    props: {
        work: Object
    }
}
const display = {
    template: "#slider-display",
    props: {
        work: Object
    }
}
const btns = {
    template: "#slider-btns",
    props: {
        works: Array,
        Index: Number
    },
    data() {
        return {
            prevButtonWorks: [],
            nextButtonWorks: [],
        }
    },
    created() {
        this.prevButtonWorks = this.transformWorksForBtn('prev');
        this.nextButtonWorks = this.transformWorksForBtn('next');
    },
    methods: {
        slide(direction) {
            this.$emit('slide', direction);
        },
        transformWorksForBtn(buttonDirection) {
            const worksArrayForBtn = [...this.works];
            const lastItem = worksArrayForBtn[worksArrayForBtn.length - 1];
            switch (buttonDirection) {
                case 'prev':
                    worksArrayForBtn.unshift(lastItem);
                    worksArrayForBtn.pop();
                    break;
                case 'next':
                    worksArrayForBtn.push(worksArrayForBtn[0]);
                    worksArrayForBtn.shift();
                    break;

            }
            return worksArrayForBtn;
        }
    }
}


new Vue({
    el: '#slider_component',

    components: {
        info,
        display,
        btns
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    watch: {
        currentIndex(value) {
            this.loopCurrentIndex(value);
        }
    },
    created() {
        const data = require('../../../views/components/templates/works.json');
        this.works = data;
    },


    methods: {
        loopCurrentIndex(value) {
            const worksAmountfromZero = this.works.length - 1;
            if (value > worksAmountfromZero) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmountfromZero;
        },
        handleSlide(direction) {
            switch (direction) {
                case "next":
                    this.currentIndex = this.currentIndex - 1;
                    break;

                case "prev":
                    this.currentIndex = this.currentIndex + 1;
                    break;
            }
            // console.log(this.currentIndex)
        }
    },
    template: '#slider-root'
})