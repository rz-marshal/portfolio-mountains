<template lang="pug">
  .content-container
    .blogs
      h2.blogs__title Страница "Блог"

      .blogs__content
        blogs-add
        blogs-list(
          :blogs="blogs"
        )
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import blogsAdd from './blogsAdd.vue';
  import blogsList from './blogsList.vue';
  export default {
    components: {
      blogsAdd,
      blogsList
    },
    computed: {
      ...mapState('blogs', {
        blogs: state => state.data
      })
    },
    created() {
      this.fetchBlogs()
    },
    methods: {
      ...mapActions({
        fetchBlogs: 'blogs/fetch'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .blogs {
    &__title {
      margin: 0;
      margin-bottom: 40px;
      font-size: 21px;
    }
    &__content {
      display: flex;
      justify-content: space-between;
      @media (max-width: 980px) {
        flex-direction: column;
        justify-content: flex-start;
      }
    }
  }
</style>