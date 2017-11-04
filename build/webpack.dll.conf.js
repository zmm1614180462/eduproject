const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    vendor: [
      'vue/dist/vue.common.js',
      'vue-router',
      'vuex',
      'axios',
    ]
  },
  output: {
    path: path.resolve(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },

//   plugins: [
//     new webpack.DllPlugin({
//       path: path.join(__dirname, '.', '[name]-manifest.json'),
//       libraryTarget: 'commonjs2',
//       name: '[name]_library'
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     })
//   ]


}
