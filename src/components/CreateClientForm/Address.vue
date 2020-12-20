<template>
  <div>
    <div class="client-form__section">
      <TextField :label="'Страна'" />
      <TextField :label="'Почтовый индекс'" />
    </div>
    <div class="client-form__section">
      <TextField :label="'Регион'" />
      <TextField :label="'Город'"
                 :matchers="matchers"
                 :formatter="capitalizeFormatter"
                 required="true"
                 @validate="validate($event), $emit('validate', validated)"
      />
    </div>
    <div class="client-form__section">
      <TextField :label="'Улица'" />
      <TextField :label="'Дом'" />
    </div>
  </div>
</template>

<script>
  import TextField from './TextField'

  export default {
    components: { TextField },
    data() {
      return {
        validated: false,
        matchers: [
          { message: 'Слишком короткое имя города', match: city => city.length > 2 }
        ],
        capitalizeFormatter: (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1)
            .replace(/\s|\d/, '')
        }
      }
    },
    methods: {
      validate(validated) {
        this.validated = validated
      }
    }
  }
</script>
