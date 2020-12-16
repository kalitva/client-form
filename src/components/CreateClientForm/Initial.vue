<template>
  <div class="initial">
    <label @click="focusInput">{{ label }}</label>
    <input @focus="selectInput" @blur="deselectInput" v-model="value" autofocus>
  </div>
</template>

<script>
export default {
  props: ['label'],
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
  .focused
    border-color: $color-primary
</style>
