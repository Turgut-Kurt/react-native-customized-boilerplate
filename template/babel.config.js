module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '~assets',
            rootPathSuffix: 'src/assets/index',
          },
          {
            rootPathPrefix: '~components',
            rootPathSuffix: 'src/components/index',
          },
          {
            rootPathPrefix: '~config',
            rootPathSuffix: 'src/config/index',
          },
          {
            rootPathPrefix: '~hooks',
            rootPathSuffix: 'src/hooks/index',
          },
          {
            rootPathPrefix: '~locales',
            rootPathSuffix: 'src/locales/index',
          },
          {
            rootPathPrefix: '~navigation',
            rootPathSuffix: 'src/navigation/index',
          },
          {
            rootPathPrefix: '~schema',
            rootPathSuffix: 'src/schema/index',
          },
          {
            rootPathPrefix: '~screens',
            rootPathSuffix: 'src/screens/index',
          },
          {
            rootPathPrefix: '~store',
            rootPathSuffix: 'src/store/index',
          },
          {
            rootPathPrefix: '~utils',
            rootPathSuffix: 'src/utils/index',
          },
        ],
      },
    ],
  ],
};
