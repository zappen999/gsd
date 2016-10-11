const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');
const srcConfig = require('./src/config');

var config = {
  module: {},
  resolve: {
    alias: {
      routes: path.join(__dirname, 'src', 'routes'),
      components: path.join(__dirname, 'src', 'components')
    }
  },
  modulesDirectories: ['node_modules', 'src']
};

config.entry = [
  srcConfig.ENTRY.DEVELOPMENT,
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
];

config.output = {
  path: path.join(__dirname, 'public'),
  filename: srcConfig.FILES.CLIENT_BUNDLE,
  chunkFilename: '[id].js',
  publicPath: '/public/'
};

config.module.loaders = [
  {
    test: /.(jsx|js)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      plugins: ['transform-runtime'],
      presets: ['es2015', 'react'],
      env: {
        development: {
          plugins: [
            ['react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              }, {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
              }]
            }]
          ]
        }
      }
    }
  },
  {
    test: /\.styl$/,
    loader: 'style-loader!css-loader?modules&camelCase&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader' // eslint-disable-line
  }
];

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new ExtractTextPlugin(srcConfig.FILES.STYLE_BUNDLE),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

config.postcss = () => {
  return [autoprefixer];
};

config.stylus = {
  use: [
    poststylus(['autoprefixer'])
  ]
};

module.exports = config;
