<template>
  <div class="sms-checkbox">
    <input id="no-sms" type="checkbox">
    <label for="no-sms">Не отправлять СМС</label>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  .sms-checkbox
    label
      @extend .label
      margin-left: 1rem
    input
      vertical-align: middle
</style>
