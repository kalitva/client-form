<template>
  <form ref="clientForm" class="client-form" autocomplete="off">
    <BasicData @validate="validate($event)" v-show="modals[basicDataIndex]" />
    <Address @validate="validate($event)" v-show="modals[addressIndex]" />
    <PassportData @validate="validate($event)" v-show="modals[passportDataIndex]" />
    <div class="client-form__useful-tip">
      Поля, помеченные звездочкой, обязательны для заполнения
    </div>
    <div class="client-form__navigation">
      <button :disabled="disablePreviousButton" @click.prevent="togglePreviousWindow">Назад</button>
      <button :disabled="disableNextButton" @click.prevent="toggleNextWindow">
        {{ nextButtonContent }}
      </button>
    </div>
    <div class="client-form__created" v-if="clientCreatedModal" @click="clientCreatedModal = false">
      <p class="client-form__created__message">Вы успешно зарегестрировались</p>
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
        basicDataIndex: 0,
        addressIndex: 1,
        passportDataIndex: 2,
        formElement: null,
        openedWindow: 0,
        modals: [true, false, false],
        disablePreviousButton: true,
        disableNextButton: true,
        clientCreatedModal: false
      }
    },
    computed: {
      nextButtonContent() {
        return this.openedWindow === this.passportDataIndex ? 'Готово' : 'Далее'
      }
    },
    methods: {
      toggleNextWindow() {
        if (this.openedWindow >= this.passportDataIndex) {
          this.clientCreatedModal = true
          return
        }
        this.disablePreviousButton = false
        this.modals[this.openedWindow] = false
        this.modals[this.openedWindow + 1] = true
        this.openedWindow += 1
        this.disableNextButton = true
      },
      togglePreviousWindow() {
        this.modals[this.openedWindow] = false
        this.modals[this.openedWindow - 1] = true
        this.openedWindow -= 1
        if (!this.openedWindow) {
          this.disablePreviousButton = true
        }
      },
      validate(validated) {
        this.disableNextButton = !validated
      }
    }
  }
</script>

<style lang="sass">
  .client-form
    position: relative
    max-width: 90rem
    margin: 0 auto
    padding: 3rem 8rem
    font: 1.4rem $font-stack
    background-color: $color-secondary
    &__section
      display: flex
      flex-wrap: wrap
      column-gap: 10rem
      row-gap: 4rem
      margin-top: 5rem
    &__useful-tip
      margin-top: 6rem
      font: 1.2rem $font-stack
      color: $color-warning
    &__navigation
      margin-top: 1.5rem
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
    &__created
      position: absolute
      display: flex
      justify-content: center
      align-items: center
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: rgba(255, 255, 255, .5)
      &__message
        display: flex
        justify-content: center
        align-items: center
        width: 32rem
        height: 20rem
        border: 1px dotted $color-light
        border-radius: 0.5rem
        background-color: $color-extra-light
        font: 200 1.5rem $font-stack
        color: $color-dark
    @media screen and (max-width: 550px)
      padding: 3rem 3rem
</style>
