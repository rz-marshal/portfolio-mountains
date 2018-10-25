<template lang="pug">
    tr(v-if="editmode === false")
        td {{skill.title}}
        td {{skill.percents}} %
        td
            button(type="button").button.button--edit &#9998 
        td
            button(type="button" @click="removeSkill(skill.id)").button.button--delete &#10006
    tr(v-else)
        td
            input(type="text" placeholder="newskill"
            v-model="newSkill.title")
        td
            input(type="text" placeholder="percents"
            v-model="newSkill.percents")
        td
            button(type="button" @click="addNewSkill(newSkill)") Добавить
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
    editmode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: 0,
        category: 0
      }
    };
  },
  methods: {
    ...mapActions({
      addNewSkill: "skills/add",
      removeSkill: "skills/remove"
    })
  }
};
</script>
<style lang="scss" scoped>

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
</style>

