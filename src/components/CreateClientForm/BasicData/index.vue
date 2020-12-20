<template>
  <div>
    <div class="client-form__section">
      <TextField :label="'Фамилия'"
                 :required="true"
                 :matchers="initialMatchers"
                 :formatter="capitalizeFormatter"
                 @validate="validateSurname($event), $emit('validate', validated)"
      />
      <TextField :label="'Имя'"
                 :required="true"
                 :matchers="initialMatchers"
                 :formatter="capitalizeFormatter"
                 @validate="validateName($event), $emit('validate', validated)"
      />
      <TextField :label="'Отчество'" :formatter="capitalizeFormatter" />
    </div>
    <div class="client-form__section">
      <DateField @validate="validateDate" label="Дата рождения" :required="true" />
      <Sex />
    </div>
    <div class="client-form__section">
      <TextField :required="true"
                 :label="'Номер телефона'"
                 :placeholder="'7-(987)-654-32-10'"
                 :formatter="phoneNumberFormatter"
                 :matchers="phoneNumberMatchers"
                 @validate="validatePhoneNumber($event), $emit('validate', validated)"
      />
    </div>
    <div class="client-form__section">
      <ClientGroup />
      <Selector :label="'Лечащий врач'" :options="doctors" :placeholder="'Выберите доктора...'" />
    </div>
    <div class="client-form__section">
      <SMSCheckbox />
    </div>
  </div>
</template>

<script>
  import TextField from '../TextField'
  import DateField from '../DateField'
  import Sex from './Sex'
  import ClientGroup from './ClientGroup'
  import Selector from '../Selector'
  import SMSCheckbox from './SMSCheckbox'

  const PHONE_NUMBER_LENGTH = 11
  const PHONE_NUMBER_FORMATTED_LENGTH = 17

  export default {
    components: { TextField, Sex, DateField, ClientGroup, Selector, SMSCheckbox },
    data() {
      return {
        surnameValidated: false,
        nameValidated: false,
        phoneNumberValidated: false,
        dateValidated: false,
        validated: false,
        doctors: ['Иванов Иван', 'Петров Петр', 'Сидоров Сидор'],

        capitalizeFormatter: (initial) => {
          return initial.charAt(0).toUpperCase() + initial.slice(1)
            .replace(/\s|\d/, '')
        },
        phoneNumberFormatter: (phoneNumber) => {
          const number = phoneNumber.split(/\D/).join`` // replace all no digit occurrences
          if (number.length === PHONE_NUMBER_LENGTH) {
            return String.format(
              '7-({1})-{2}-{3}-{4}',
              number.slice(1, 4), number.slice(4, 7), number.slice(7, 9), number.slice(9, 11)
            )
          }
          return number
        },
        initialMatchers: [
          {
            message: 'Обязательноe поле',
            match: initial => initial.trim().length
          },
          {
            message: 'Допустимы только русские символы',
            match: initial => initial.trim().match(/^[а-яА-Я]*$/)
          },
          {
            message: 'Слишком короткое',
            match: initial => initial.trim().length > 2
          }
        ],
        phoneNumberMatchers: [
          {
            message: 'Обязательноe поле',
            match: phoneNumber => phoneNumber.length
          },
          {
            message: 'Необходимо ввести 11 цифр',
            match: phoneNumber => phoneNumber.length === PHONE_NUMBER_FORMATTED_LENGTH
          }
        ]
      }
    },
    methods: {
      validate() {
        this.validated = this.surnameValidated
            && this.nameValidated
            && this.phoneNumberValidated
            && this.dateValidated
      },
      validateSurname(validated) {
        this.surnameValidated = validated
        this.validate()
      },
      validateName(validated) {
        this.nameValidated = validated
        this.validate()
      },
      validatePhoneNumber(validated) {
        this.phoneNumberValidated = validated
        this.validate()
      },
      validateDate(validated) {
        this.dateValidated = validated
        this.validate()
      }
    }
  }
</script>
