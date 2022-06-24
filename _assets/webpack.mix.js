/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const mix = require('laravel-mix');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

const productionPlugins = [
  new CopyPlugin({
    patterns: [
      { from: './src/images', to: './public/images' },
    ],
  }),
  new ImageminPlugin({
    disable: !mix.inProduction(),
    pngquant: ({ quality: '65-80' }),
    plugins: [
      ImageminMozjpeg({ quality: 75 }),
    ],
  }),
  new ImageminWebpWebpackPlugin(),
];

const developmentPlugins = [
  new StylelintPlugin({
    configFile: './.stylelintrc.json',
    files: './src/css/*.css',
  }),
  ...productionPlugins,
];

const plugins = mix.inProduction() ? productionPlugins : developmentPlugins;

mix.webpackConfig({
  plugins,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: '/wp-content/themes/stoneinjurylawyers/_assets/',
    chunkFilename: 'public/js/chunk-[id].js',
  },
});

mix.js('src/js/script.js', 'public/js')
  .css('src/css/style.css', 'public/css').options({
    processCssUrls: false,
  });


  mix.browserSync({
    proxy: 'http://scr.develop/',
    files: ['../**/*.php', '../_assets/**/*.css'],
    notify: false,
    open: false,
  });