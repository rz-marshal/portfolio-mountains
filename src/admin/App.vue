<template lang="pug">
  div.admin-app
    app-header
    tabs
      .tabs
    .container-components
      router-view
      skills(
        :skills="skills"
      )
      //- blogs(
      //-   :blogs="blogs"
      //- )
      //- works(
      //-   :works="works"
      //- )
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  components: {
    appHeader: require("./components/header").default,
    tabs: require("./components/tabs").default,
    skills: require("./components/skills").default

  },
  computed:{
    ...mapState('skills', {
      skills: state => state.data
    })
  },
  created(){
    this.fetchSkills();
  },
  methods:{
    ...mapActions({
      fetchSkills: "skills/fetch"
    })
  }
};
</script>
<style>
  body{
    margin: 0;
    box-sizing: border-box;
  }
  .container-components{
    background-color: greenyellow;
  }
</style>
