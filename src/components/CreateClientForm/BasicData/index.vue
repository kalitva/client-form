<template>
<div>
  <div class="client-form__section">
    <TextField :label="'Фамилия'" :required="true"/>
    <TextField :label="'Имя'" :required="true" />
    <TextField :label="'Отчество'" />
  </div>
  <div class="client-form__section">
    <DateField label="Дата рождения" :required="true" />
    <Sex />
  </div>
  <div class="client-form__section">
    <TextField :label="'Номер телефона'" :placeholder="'7-(987)-654-32-10'" required="true" />
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
  import TextField from '../TextField.vue'
  import Sex from './Sex'
  import DateField from '../DateField'
  import ClientGroup from './ClientGroup'
  import Selector from '../Selector'
  import SMSCheckbox from './SMSCheckbox'

  export default {
    components: { TextField, Sex, DateField, ClientGroup, Selector, SMSCheckbox },
    data() {
      return {
        doctors: ['Иванов Иван', 'Петров Петр', 'Сидоров Сидор']
      }
    }
  }
</script>
