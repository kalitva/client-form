import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.sass'

String.format = function(format, ...args) {
  let formattedString = format.slice(0)
  args.forEach((arg, index) => {
    formattedString = formattedString.replace(`{${index + 1}}`, arg)
  })
  return formattedString
}

createApp(App).mount('#app')
