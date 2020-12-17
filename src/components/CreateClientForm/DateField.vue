<template>
  <div class="date-field">
    <label>{{ label }}</label>
    <div>
      <input placeholder="- год -" @focus="openYears" @keypress.prevent>
      <ul v-show="showYears" class="date-field__modal year">
        <li v-for="year of years" :key="year" @click="choseValue">{{ year }}</li>
      </ul>
      <input placeholder="  - месяц -" @focus="openMonths" @keypress.prevent>
      <ul class="date-field__modal month" v-show="showMonths">
        <li v-for="month of months" :key="month" @click="[choseValue($event), generateDays($event)]">
          {{ month.name }}
        </li>
      </ul>
      <input placeholder="- число -" @focus="openDays" @keypress.prevent>
      <ul class="date-field__modal day" v-show="showDays">
        <li v-for="day of days" :key="day" @click="choseValue">{{ day }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['label'],
    data() {
      return {
        showYears: false,
        showMonths: false,
        showDays: false,
        years: this.generateYearsArray(),
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
        ],
        days: null
      }
    },
    directive() {
      alert(alert)
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
      choseValue(event) {
        const input = event.target.parentElement.previousElementSibling
        input.setAttribute('value', event.target.textContent)
        this.closeYears()
        this.closeMonths()
        this.closeDays()
      },
      generateYearsArray() {
        return Array(100)
          .fill(new Date().getFullYear())
          .map((year, index) => year - index)
      },
      generateDays(event) {
        const choosenMonth = this.months.find(month => month.name === event.target.textContent)
        this.checkValueOfDay(choosenMonth.length, event)
        this.days = Array(choosenMonth.length)
          .fill(1)
          .map((day, index) => day + index)
      },
      checkValueOfDay(monthLength, event) {
        const input = event.target.parentElement.nextElementSibling
        if (input.value > monthLength) {
          input.value = ''
        }
      }
    }
  }
</script>

<style lang="sass">
  .date-field
    position: relative
    &__modal
      top: 6rem
      width: 9rem
      @extend .select-items
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
    .month
      left: 11rem
    .day
      left: 22rem
</style>
