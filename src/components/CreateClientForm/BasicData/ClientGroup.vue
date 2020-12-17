<template>
  <div class="client-group">
    <label class="client-group__label">Группа клиентов:</label>
    <div>
      <input id="vip" type="checkbox">
      <label for="vip">VIP</label>
      <input id="problem" type="checkbox">
      <label for="problem">Проблемные</label>
      <input id="osr" type="checkbox">
      <label for="osr">ОСР</label>
    </div>
  </div>
</template>

<style lang="sass">
  .client-group
    &__label
      display: block
      margin-bottom: 2rem
    label
      @extend .label
      margin-right: 4rem
    input
      vertical-align: middle
      margin-right: 1rem
</style>
