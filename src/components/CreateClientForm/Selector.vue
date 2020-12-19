<template>
  <div class="selector">
    <label :required="required"> {{ label }}</label>
    <select>
      <option value='' disabled selected hidden>{{ placeholder }}</option>
      <option v-for="option of options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['label', 'required', 'placeholder', 'options']
}
</script>

<style lang="sass">
  .selector
    label
      @extend .label
      display: block
    select
      margin-top: 1.5rem
      padding: 0.5rem 3.5rem 0.5rem 1rem
      font: 200 1.2rem $font-stack
      background-color: $color-extra-light
      border: none
      background: url(../../assets/arrow.png) no-repeat 94% $color-light
      appearance: none
</style>
