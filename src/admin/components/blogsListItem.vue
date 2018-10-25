<template lang="pug">
  tr.blog-item
    td.blog-item__name {{ blog.title }}
    td.blog-item__date {{ blog.updated_at.slice(0, 10) }}
    td.blog-item__content {{ blog.content }}
    td.blog-item__buttons
      button(
        @click=""
        type="button"
      ).button.button--edit &#9998
      button(
        @click="removeBlog(blog.id)"
        type="button"
      ).button.button--delete &#10006
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      blog: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      ...mapActions({
        removeBlog: 'blogs/remove'
      })
    }
  }
</script>

<style lang="scss">
  .blog-item {
    td {
      text-align: left;
      padding: 30px 0 30px 25px;
      font-size: 16px;
      color: #455a64;
    }
    &__date {
      white-space: nowrap;
    }
    &__content {
      max-width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__buttons {
      display: flex;
      flex-direction: column;
      padding: 30px 40px !important;
    }
    
    .button {
      font-size: 22px;
      cursor: pointer;
      background: transparent;
      border: none;

      &--edit {
        transform: rotate(90deg);
        color: grey;
        margin-bottom: 10px;
      }
      &--delete {
        color: red;
      }
    }
  }
</style>