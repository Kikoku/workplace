// Runs plugins on css files
module.exports = {
  plugins: [
    // Applies vendor prefixes to css files
    require('autoprefixer'),
    // Minifies css
    // require('cssnano')({
    //   preset: 'advanced'
    // })
  ]
}