module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/variables.sass"
          @import "@/assets/fields.sass"
        `
      }
    }
  }
}
