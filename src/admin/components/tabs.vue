<template lang="pug">
  div.tabs
    ul.tabs__list 
        li.tabs__item
            router-link(to="/", active-class="tabs__text--active").tabs__text Обо мне
        li.tabs__item
            router-link(to="/blogs", active-class="tabs__text--active").tabs__text Блог
        li.tabs__item
            router-link(to="/works", active-class="tabs__text--active").tabs__text Мои работы
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.tabs{
    height: 80px;
    width: 100%;
    background-color: #f0efe9;
    display: flex;
    align-items: center;
    box-sizing: border-box;
}
.tabs__list{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
}
.tabs__item{
    width: 180px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;
    border-right: 2px solid #f9f9f8;
    
}
.tabs__text{
    font-family: Arial, sans-serif;
    text-decoration: none;
    font-weight: 600;
    color: #67787f;

    &:hover{
        color:#14bea7;
    }
    &--active{
       color:#14bea7;
    }
}
</style>
