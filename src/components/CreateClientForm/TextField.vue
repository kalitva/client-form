<template>
  <div class="initial">
    <label @click="focusInput" :required="required">{{ label }} </label>
    <input autofocus
           v-model="value"
           :placeholder="placeholder"
           @focus="selectInput"
           @blur="deselectInput"
           @input="formatInput($event), $emit('validate', validated)">
    <div class="validation-error">{{ validateMessage }}</div>
  </div>
</template>

<script>
  import { Validator } from './Validator'

  export default {
    props: ['label', 'placeholder', 'required', 'matchers', 'formatter'],
    data() {
      return {
        value: '',
        validateMessage: '',
        validated: false
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
      },
      validate() {
        this.validator.validate(this.value)
        this.validateMessage = this.validator.getMessage()
        this.validated = this.validator.isResolved()
      },
      formatInput() {
        this.value = this.formatter ? this.formatter(this.value) : this.value
        this.required && this.validate()
      }
    },
    mounted() {
      this.validator = new Validator(this.matchers)
    }
  }
</script>

<style lang="sass">
  .initial
    position: relative
    label
      @extend .label
      display: block
    input
      @extend .input-field
      margin-bottom: 3rem
    .focused
      border-color: $color-primary
</style>
