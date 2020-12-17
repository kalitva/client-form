<template>
  <div class="client-form__section">
    <TextField :label="'Страна'" />
  </div>
  <div class="client-form__section">
    <TextField :label="'Почтовый индекс'" />
  </div>
  <div class="client-form__section">
    <TextField :label="'Регион'" />
    <TextField :label="'Город'" />
  </div>
  <div class="client-form__section">
    <TextField :label="'Улица'" />
    <TextField :label="'Дом'" />
  </div>
</template>

<script>
import TextField from '../TextField'
export default {
  components: { TextField }
}
</script>

<style>

</style>
