module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/test1/" : "/",
  transpileDependencies: [
    'vuetify'
  ]
}
