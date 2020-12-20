<template>
  <div class="client-group">
    <label required="required" class="client-group__label">Группа клиентов:</label>
    <div>
      <div class="client-group__section">
        <input id="vip"
               type="checkbox"
               v-model="group.vip"
               @change="validate($event), $emit('validate', validated)"
        >
        <label for="vip">VIP</label>
      </div>
      <div class="client-group__section">
        <input id="problem"
               type="checkbox"
               v-model="group.problem"
               @change="validate($event), $emit('validate', validated)"
        >
        <label for="problem">Проблемные</label>
      </div>
      <div class="client-group__section">
        <input id="osr"
               type="checkbox"
               v-model="group.osr"
               @change="validate($event), $emit('validate', validated)"
        >
        <label for="osr">ОСР</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['reuired'],
    data() {
      return {
        validated: false,
        group: { vip: false, problem: false, osr: false }
      }
    },
    methods: {
      validate() {
        this.validated = this.group.vip || this.group.problem || this.group.osr
      }
    }
  }
</script>

<style lang="sass">
  .client-group
    &__section
      display: inline
    &__label
      display: block
      margin-bottom: 2rem
    label
      @extend .label
      margin-right: 4rem
    input
      vertical-align: middle
      margin-right: 1rem
    @media screen and (max-width: 550px)
      margin-bottom: 3rem
      &__section
        display: block
        margin-top: 1rem
</style>
