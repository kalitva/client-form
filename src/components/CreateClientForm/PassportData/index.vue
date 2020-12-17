<template>
  <div>
    <div class="client-form__section">
      <Selector :label="'Тип документа'" :placeholder="'Выберите документ...'" :options="docTypes"/>
    </div>
    <div class="client-form__section">
      <TextField :label="'Серия'" />
      <TextField :label="'Номер'" />
      <TextField :label="'Кем выдан'" />
    </div>
    <div class="client-form__section">
      <DateField :label="'Дата выдачи'" />
    </div>
  </div>
</template>

<script>
  import Selector from '../Selector'
  import TextField from '../TextField'
  import DateField from '../DateField'

  export default {
    components: { Selector, TextField, DateField },
    data() {
      return {
        docTypes: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение']
      }
    }
  }
</script>
