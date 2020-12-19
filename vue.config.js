module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/client-form/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/variables.sass"
          @import "@/assets/fields.sass"
          @import "@/assets/global.sass"
        `
      }
    }
  }
}
