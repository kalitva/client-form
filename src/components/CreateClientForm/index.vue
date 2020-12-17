<template>
  <form class="client-form">
    <BasicData v-if="showBasicInfo" />
    <Address v-if="showAddress" />
    <PassportData v-if="showPassportData" />
  </form>
</template>

<script>
  import BasicData from './BasicData'
  import Address from './Address'
  import PassportData from './PassportData'

  export default {
    components: { BasicData, Address, PassportData },
    data() {
      return {
        showBasicInfo: false,
        showAddress: false,
        showPassportData: true
      }
    }
  }
</script>

<style lang="sass">
  .client-form
    max-width: 90rem
    margin: 0 auto
    padding: 3rem 8rem
    font: 1.4rem $font-stack
    background-color: $color-secondary
    &__section
      display: flex
      flex-wrap: wrap
      column-gap: 10rem
      margin-top: 5rem
</style>
