const { i18n } = require('./next-i18next.config');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const withTM = require('next-transpile-modules')([
  '@alphafounders/rf-questionflow-component',
]);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withTM(
  withBundleAnalyzer({
    reactStrictMode: true,
    i18n: {
      ...i18n,
      localeDetection: false,
    },

    typescript: {
      ignoreBuildErrors: false,
    },

    sassOptions: {
      additionalData: `$asset-prefix: '';`,
    },

    webpack: (config, options) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: false, // true outputs JSX tags
            },
          },
        ],
      });

      config.plugins.push(
        // To strip all locales except “en” and “th”
        // (“en” is built into Moment and can’t be removed)
        new MomentLocalesPlugin({
          localesToKeep: ['th'],
        })
      );

      return config;
    },
  })
);
