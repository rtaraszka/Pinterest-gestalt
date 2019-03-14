const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'css-[hash:base64:7]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-cssnext')({
                  features: {
                    customMedia: {
                      extensions: './packages/gestalt/src/breakpoints.json',
                    },
                  },
                }),
              ],
            },
          },
        ],
      },
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-flow',
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
};
