<template>
  <div class="initial">
    <label @click="focusInput" :required="required">{{ label }} </label>
    <input autofocus @focus="selectInput" @blur="deselectInput" v-model="value" :placeholder="placeholder">
  </div>
</template>

<script>
  export default {
    props: ['label', 'placeholder', 'required'],
    data() {
      return {
        value: ''
      }
    },
    methods: {
      focusInput(event) {
        event.target.nextElementSibling.focus()
      },
      selectInput(event) {
        event.target.classList.add('focused')
      },
      deselectInput(event) {
        event.target.classList.remove('focused')
      }
    }
  }
</script>

<style lang="sass">
  .initial
    label
      @extend .label
      display: block
    input
      @extend .input-field
      margin-bottom: 3rem
    .focused
      border-color: $color-primary
</style>
