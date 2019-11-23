const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: '8080',
    hot: true,
    historyApiFallback: true,
    open: true
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      bootstrap: path.resolve(__dirname, 'node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|woff2|woff|eot|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "WebSite",
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}