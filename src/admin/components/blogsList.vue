<template lang="pug">
  table.table
    caption.table__caption Последние записи
    tr.table__heading
      th Название
      th Дата
      th Содержание
      th
    blog-item(
      v-for="blog in blogs"
      :key="blog.id"
      :blog="blog"
    )

</template>

<script>
  import blogsListItem from './blogsListItem.vue';
  export default {
    components: {
      blogItem: blogsListItem
    },
    props: {
      blogs: {
        type: Array,
        default: () => []
      }
    } 
  }
</script>

<style lang="scss">
  .table {
    border-collapse: collapse;
    background-color: white;
    border-radius: 10px;
    max-width: 626px;
    &__caption {
      font-size: 16px;
      font-weight: 600;
      color: #455a64;
      text-align: left;
      margin-bottom: 10px;
    }
    &__heading th {
      border-bottom: 1px solid #6c9c5a;
      padding: 20px 0 20px 25px;
      text-align: left;
    }
    &__th {
      &_textOverflow_ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>