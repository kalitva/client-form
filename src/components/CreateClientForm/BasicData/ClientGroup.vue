<template>
  <div class="client-group">
    <label class="client-group__label">Группа клиентов:</label>
    <div>
      <div class="client-group__section">
        <input id="vip" type="checkbox">
        <label for="vip">VIP</label>
      </div>
      <div class="client-group__section">
        <input id="problem" type="checkbox">
        <label for="problem">Проблемные</label>
      </div>
      <div class="client-group__section">
        <input id="osr" type="checkbox">
        <label for="osr">ОСР</label>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .client-group
    &__section
      display: inline
    &__label
      display: block
      margin-bottom: 2rem
    label
      @extend .label
      margin-right: 4rem
    input
      vertical-align: middle
      margin-right: 1rem
    @media screen and (max-width: 550px)
      margin-bottom: 3rem
      &__section
        display: block
        margin-top: 1rem
</style>
