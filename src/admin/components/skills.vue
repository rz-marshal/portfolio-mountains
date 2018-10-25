<template lang="pug">
  div.skills

    h2.skills__title Страница "Обо мне"
    skills-row(
        v-for="type in types"
        :key="type.id"
        :type="type"
        :skills="skills"
    )
</template>

<script>

import skillsRow from "./skillsrow";
export default {
    components: {
        skillsRow
    },
    props:{
        skills: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            types: [
                {id:0, name: "Frontend"},
                {id:1, name: "Backend"},
                {id:2, name: "Workflow"}
            ]
        }
    }
}
</script>
 <style lang="scss" scoped>
 .skills{
  font-family: Arial, Helvetica, sans-serif;
  color: #455a64;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
}
.skills__title{
    font-size: 18px;
    padding: 0;
    margin: 0;
    margin-bottom: 35px;
    margin-top: 35px;
    flex: 1;
    flex-basis: 100%;
}
 </style>
 