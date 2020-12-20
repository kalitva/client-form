<template>
  <div class="date-field">
    <label :required="required">{{ label }}</label>
    <div>
      <input name="year"
             placeholder="- год -"
             @focus="openYears"
             @keypress.prevent
             v-model="date.year"
      >
      <ul v-show="showYears" class="date-field__modal year">
        <li v-for="year of years"
            :key="year"
            @click="chooseValue($event), $emit('validate', validated)"
        >
          {{ year }}
        </li>
      </ul>
      <input name="month"
             placeholder=" - месяц -"
             @focus="openMonths"
             @keypress.prevent
             v-model="date.month"
      >
      <ul class="date-field__modal month" v-show="showMonths">
        <li v-for="month of months"
            :key="month"
            @click="chooseValue($event), generateDays($event), $emit('validate', validated)">
          {{ month.name }}
        </li>
      </ul>
      <input name="day"
             placeholder="- число -"
             @focus="openDays"
             @keypress.prevent
             v-model="date.day"
      >
      <ul class="date-field__modal day" v-show="showDays">
        <li v-for="day of days"
            :key="day"
            @click="chooseValue($event), $emit('validate', validated)">
          {{ day }}
        </li>
      </ul>
    </div>
    <div class="validation-error">{{ validateMessage }}</div>
  </div>
</template>

<script>
  import { Validator } from './Validator'

  export default {
    props: ['label', 'required'],
    data() {
      return {
        years: null,
        showYears: false,
        showMonths: false,
        showDays: false,
        days: null,
        date: { year: '', month: '', day: '' },
        validator: null,
        validateMessage: '',
        validated: false,
        months: [
          { name: 'Январь', length: 31 },
          { name: 'Февраль', length: 28 },
          { name: 'Март', length: 31 },
          { name: 'Аперль', length: 30 },
          { name: 'Май', length: 31 },
          { name: 'Июнь', length: 30 },
          { name: 'Июль', length: 31 },
          { name: 'Август', length: 30 },
          { name: 'Сентябрь', length: 30 },
          { name: 'Октябрь', length: 31 },
          { name: 'Ноябрь', length: 30 },
          { name: 'Декабрь', length: 31 }
        ]
      }
    },
    methods: {
      openYears() {
        this.showYears = true
      },
      closeYears() {
        this.showYears = false
      },
      openMonths() {
        this.showMonths = true
      },
      closeMonths() {
        this.showMonths = false
      },
      openDays() {
        this.showDays = true
      },
      closeDays() {
        this.showDays = false
      },
      chooseValue(event) {
        const input = event.target.parentElement.previousElementSibling
        this.date[input.getAttribute('name')] = event.target.textContent
        this.closeYears()
        this.closeMonths()
        this.closeDays()
        this.validate()
      },
      generateDays(event) {
        const choosenMonth = this.months.find(month => month.name === event.target.textContent)
        this.checkValueOfDay(choosenMonth.length, event)
        this.days = Array(choosenMonth.length).fill(1)
          .map((day, index) => day + index)
      },
      checkValueOfDay(monthLength, event) {
        const input = event.target.parentElement.nextElementSibling
        if (input.value > monthLength) {
          input.value = ''
        }
      },
      generateYears() {
        const thisYear = new Date().getFullYear()
        return Array(100).fill(thisYear)
          .map((year, index) => year - index)
      },
      validate() {
        this.validator.validate(this.date)
        this.validateMessage = this.validator.getMessage()
        this.validated = this.validator.isResolved()
      }
    },
    mounted() {
      this.years = this.generateYears()
      this.validator = new Validator([
        { message: 'Укажите год', match: date => date.year },
        { message: 'Укажите месяц', match: date => date.month },
        { message: 'Укажите число', match: date => date.day }
      ])
    }
  }
</script>

<style lang="sass">
  .date-field
    position: relative
    &__modal
      position: absolute
      top: 6rem
      z-index: 1
      max-height: 15rem
      overflow: auto
      text-align: center
      font: 200 1.5rem $font-stack
      background-color: $color-extra-light
      color: $color-dark
      scrollbar-width: thin
      cursor: default
      li
        list-style-type: none
        cursor: pointer
      li:hover
        background-color: $color-medium
    label
      @extend .label
    input
      @extend .input-field
      text-align: center
      caret-color: $color-secondary
      margin-right: 2rem
      width: 9rem
      cursor: default
    input[name="year"]
      width: 7rem
    input[name="month"]
      width: 11rem
    input[name="day"]
      width: 9rem
    .year
      left: 1rem
      width: 5rem
    .month
      left: 10rem
      width: 8rem
    .day
      left: 24rem
      width: 5rem
</style>
