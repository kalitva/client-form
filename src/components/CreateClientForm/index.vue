<template>
  <form ref="clientForm" class="client-form">
    <BasicData v-show="modals[BASIC_DATA_INDEX]" />
    <Address v-show="modals[ADDRESS_INDEX]" />
    <PassportData v-show="modals[PASSPORT_DATA_INDEX]" />
    <div class="client-form__navigation">
      <button :disabled="disablePreviousButton" @click.prevent="togglePreviousWindow">Назад</button>
      <button @click.prevent="toggleNextWindow">{{ nextButtonContent }}</button>
    </div>
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
        BASIC_DATA_INDEX: 0,
        ADDRESS_INDEX: 1,
        PASSPORT_DATA_INDEX: 2,
        formElement: null,
        openedWindow: 0,
        modals: [true, false, false],
        disablePreviousButton: true
      }
    },
    computed: {
      nextButtonContent() {
        return this.openedWindow === this.PASSPORT_DATA_INDEX ? 'Готово' : 'Далее'
      }
    },
    methods: {
      toggleNextWindow() {
        if (this.openedWindow >= 2) {
          this.handleSubmit()
          return
        }
        this.disablePreviousButton = false
        this.modals[this.openedWindow] = false
        this.modals[this.openedWindow + 1] = true
        this.openedWindow += 1
      },
      togglePreviousWindow() {
        this.modals[this.openedWindow] = false
        this.modals[this.openedWindow - 1] = true
        this.openedWindow -= 1
        if (!this.openedWindow) {
          this.disablePreviousButton = true
        }
      },
      handleSubmit(event) {
        alert('submit')
        this.formElement.submit()
      }
    },
    mounted() {
      this.formElement = this.$refs.clientForm
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
    &__navigation
      margin-top: 7rem
      display: flex
      justify-content: space-around
      button
        border: none
        padding: 0.7rem 3rem
        font: 400 1.3rem $font-stack
        color: $color-extra-light
        background-color: $color-primary
        cursor: pointer
        transition-duration: 0.5s
      button:hover
        background-color: $color-dark
      button[disabled]
        background-color: $color-light
        color: $color-medium
        cursor: default
</style>
