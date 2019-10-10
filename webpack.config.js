const path = require('path');


function getEntry() {
  return {
    home: ''
  }
}



module.exports = {
  entry: getEntry(),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: '8080',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}