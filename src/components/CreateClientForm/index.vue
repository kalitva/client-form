<template>
  <form class="client-form">
    <div class="client-form__section">
      <Initial :label="'Фамилия'" />
      <Initial :label="'Имя'" />
      <Initial :label="'Отчество'" />
    </div>
    <div class="client-form__section">
      <BirthDate />
      <Sex />
    </div>
    <div class="client-form__section">
      <ClientGroup />
      <Doctor />
    </div>
    <div class="client-form__section">
      <SMSCheckbox />
    </div>
  </form>
</template>

<script>
  import Initial from './Initial.vue'
  import Sex from './Sex'
  import BirthDate from './BirthDate'
  import ClientGroup from './ClientGroup'
  import Doctor from './Doctor'
  import SMSCheckbox from './SMSCheckbox'
  export default {
    components: { Initial, Sex, BirthDate, ClientGroup, Doctor, SMSCheckbox }
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
