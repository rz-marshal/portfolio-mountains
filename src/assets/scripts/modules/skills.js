console.log('skills');
import Vue from 'vue';


const skill = {
    template: '#skill',
    props: {
        title: String,
        percentage: Number
    },
    methods:{
        drowCircleDependonPercentage(){
            const circle = this.$refs.circle;
            const currentPercent = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dashoffset')
            );
    
            const requiredDashoffset = (currentPercent / 100) * (100-this.percentage);
    
            circle.style.strokeDashoffset = requiredDashoffset;
        }
    },
    mounted(){
        this.drowCircleDependonPercentage();
    }
};
const skillsRow = {
    components: {
        skill
    },
    template: '#skills-item',
    props: {
        skills: Object
    }
}
new Vue ({
    el: '#skills-component',
    components: {
        skillsRow
    },
    data(){
        return {
            skills:[]
        }
    },
    created(){
        const data = require('../../../views/components/templates/skills.json')
        this.skills = data;
    },
    template: '#skills-list',

})