<template>
  <div class="sex">
    <div class="sex__header"><label>Выберите пол</label></div>
    <input type="radio" id="man" name="sex" value="man">
    <label for="man">Мужской</label>
    <input type="radio" id="wooman" name="sex" value="wooman">
    <label for="wooman">Женский</label>
  </div>
</template>

<style lang="sass">
  .sex
    margin-top: 1rem
    &__header
      margin-bottom: 1rem
    label
      @extend .label
      padding-right: 3rem
    input
      vertical-align: middle
      margin-right: 1rem
</style>
