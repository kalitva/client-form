<template>
  <div class="doctor">
    <label>Лечащий врач</label>
    <select>
      <option value='' disabled selected hidden>Выберите доктора...</option>
      <option>Иванов Иван</option>
      <option>Петров Петр</option>
      <option>Сидоров Сидор</option>
    </select>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  .doctor
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
