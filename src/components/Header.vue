<template>
  <header class="main-header">
    <div class="wrapper">
        <div class="main-header__title">
          <h1>Доктор Айболит</h1>
          <p>Всех излечит, исцелит Добрый доктор Айболит</p>
        </div>
      <div class="main-header__contacts">
        <a class="main-header__contacts__phone" href="tel:89876543210">8-987-654-32-10</a>
        <a class="main-header__contacts__email" href="mailto:aibolit@doctor.com">aibolit@doctor.com</a>
      </div>
    </div>
  </header>
</template>

<style lang="sass">
  .main-header
    font-family: $font-stack
    background: $color-primary
    padding: 0.2rem 0
    &__title
      width: 25rem
      padding-left: 1.2rem
      align-self: center
      color: $color-extra-light
      h1
        font-weight: 200
        font-size: 1.9rem
      p
        max-width: 15rem
        padding-top: 0.2rem
        padding-left: 0.4rem
    &__contacts
      align-self: center
      a
        display: block
        padding: 0.3rem
        font-size: 1.2rem
        color: $color-extra-light
      &__phone
        font-weight: 700
        text-decoration: none
      &__email
        font-style: italic
</style>
