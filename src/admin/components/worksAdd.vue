<template lang="pug">
  form.form
    h3.form__title Добавить работу
    input.form__input(
      v-model="newWork.title"
      type="text"
      placeholder="Название проекта"
    )
    input.form__input(
      v-model="newWork.techs"
      type="text"
      placeholder="Технологии"
    )
    input.form__input(
      v-model="newWork.link"
      type="text"
      placeholder="Ссылка"
    )
    label.file(for="file")
      input.file__input(
        @change="handleFiles"
        type="file"
        ref="myFiles"
        id="file"
        name="file"
      )
      //- img.file__image(src="../content/download_img.png" alt="Загрузить картинку")
      span.file__label Загрузить картинку
    button.form__button(
      @click="addNewWork(newWork)"
      type="button"
    ) Добавить

</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      work: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        newWork: {
          title: '',
          techs: '',
          link: '',
          photo: ''
        }
      }
    },
    methods: {
      handleFiles(evt) {
        const file = evt.target.files;
        if (file.length === 0) return;
        this.newWork.photo = file[0];
      },
      ...mapActions({
        addNewWork: 'works/add'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;
    @media (max-width: 980px) {
      margin-bottom: 30px;
    }
    &__title {
      font-size: 16px;
      margin: 0;
      margin-bottom: 15px;
    }
    &__input {
      width: 300px;
      padding: 12px 20px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      &::placeholder {
        color: rgba(55, 62, 66, 0.5);
      }
      &:nth-child(4) {
        margin-bottom: 60px;
        @media (max-width: 980px) {
          margin-bottom: 30px;
        }
      }
    }
    &__button {
      background-color: #6c9c5a;
      padding: 10px 20px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 60px;
      font-weight: 600;
      @media (max-width: 980px) {
        margin-top: 30px;
      }
      &:hover {
        background-color: #4e8839;
      }
    }
  }
  .file {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    &__input {
      display: none;
    }
    &__image {
      fill: #6c9c5a;
      margin-right: 10px;
    }
    &__label {
      color: #6c9c5a;
    }
    &:hover::before {
      opacity: 1;
      transform: translateY(0);
    }
    &:hover::after {
      opacity: 1;
      transform: translateY(0);
    }
    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #4e8839;
      transition: all 0.2s;
    }
    &::before {
      top: -11px;
      transform: translateY(-20px);
      opacity: 0;
    }
    &::after {
      top: calc(100% + 6px);
      transform: translateY(20px);
      opacity: 0;
    }
  }
</style>