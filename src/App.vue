<template>
  <Header />
  <CreateClientForm />
</template>

<script>
  import Header from './components/Header'
  import CreateClientForm from './components/CreateClientForm'

  export default {
    name: 'App',
    components: { Header, CreateClientForm }
  }
</script>

<style lang="sass">
</style>
