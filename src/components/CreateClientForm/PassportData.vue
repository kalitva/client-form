<template>
  <div>
    <div class="client-form__section">
      <Selector :label="'Тип документа'"
                required="true"
                :placeholder="'Выберите документ...'"
                :options="docTypes"
                @validate="validateDocType($event), $emit('validate', validated)"
      />
    </div>
    <div class="client-form__section">
      <TextField :label="'Серия'" />
      <TextField :label="'Номер'" />
      <TextField :label="'Кем выдан'" />
    </div>
    <div class="client-form__section">
      <DateField @validate="validateDate($event), $emit('validate', validated)"
                 :label="'Дата выдачи'"
                 :required="true" />
    </div>
  </div>
</template>

<script>
  import Selector from './Selector'
  import TextField from './TextField'
  import DateField from './DateField'

  export default {
    components: { Selector, TextField, DateField },
    data() {
      return {
        validated: false,
        docTypeValidated: false,
        dateValidated: false,
        docTypes: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение']
      }
    },
    methods: {
      validate() {
        this.validated = this.dateValidated && this.docTypeValidated
      },
      validateDate(validated) {
        this.dateValidated = validated
        this.validate()
      },
      validateDocType(validated) {
        this.docTypeValidated = validated
        this.validate()
      }
    }
  }
</script>
