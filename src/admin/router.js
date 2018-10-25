import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
});

const routes = [
    {
        path: "/",
        component: skills
    },
    {
        path: "/works",
        component: works
    },
    {
        path: "/blogs",
        component: blogs
    }
];

const router = new VueRouter ({ routes, mode:'history' });

router.beforeEach((to, from, next)=>{
    guard.get('/user', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then (response => {
        next();
    }).catch(error => {
        localStorage.removeItem('token');
        window.location.href('//google.com');
    })
})

import skills from './components/skills.vue';
import works from './components/works.vue';
import blogs from './components/blogs.vue';

const SkillsComponent = { template: `<skills></skills>`, components: { skills }};
const WorksComponent = { template: `<works></works>`, components: { works }};
const BlogsComponent = { template: `<blogs></blogs>`, components: { blogs }};

export default router;