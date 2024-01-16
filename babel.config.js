module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      ["module:react-native-dotenv"],
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['./src'],
          alias: {
            "screens": "./src/screens/",
          },
        },
      ],
    ],
  };
};
