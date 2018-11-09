const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, '../src/'),
        exclude: path.resolve(__dirname, '../src/components/'),
      },

      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          'themify',
        ],
        include: [
          path.resolve(__dirname, '../src/components/'),
          path.resolve(__dirname, './'),
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../'),
      },

      {
        test: /\.js$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                parser: 'babylon',
              },
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
              failOnError: true,
            },
          },
        ],
        include: path.resolve(__dirname, './stories/'),
      },

      {
        test: /\.js$/,
        loaders: [
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
              failOnError: true,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
        exclude: path.resolve(__dirname, '../node_modules/'),
      },
    ],
  },

  resolve: {
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },

  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
};
