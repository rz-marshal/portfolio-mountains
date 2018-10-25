<template lang="pug">
  table.table
    caption.table__caption Последние работы
    tr.table__heading
      th Название
      th Технологии
      th Ссылка
      th Превью
      th
    work-item

</template>

<script>
  import worksListItem from './worksListItem.vue';
  export default {
    components: {
      workItem: worksListItem
    },
    props: {
      works: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
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
  }
</style>