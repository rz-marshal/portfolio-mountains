<template lang="pug">
  div.header
    app-form
    h2.header__title Панель администрирования
    a.header__link(href="#") Вернуться на сайт
</template>
<script>
import form from "./auth";
export default {
  components:{
    appForm: form
  }
}
</script>
<style lang="scss">
  .header{
    background-color: #14bea7;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    color: white;
    font-weight: 100;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
  }
  .header__title{
    padding: 0;
    margin: 0;
  }
  .header__link{
    text-decoration: none;
    color: white;
    border-bottom: 1px dotted white;
    &:hover {
      color: red;
      border-bottom: 1px dotted red;
    }
  }
</style>


