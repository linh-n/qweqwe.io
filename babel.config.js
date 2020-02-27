module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      "@babel/react",
    ],
    plugins: [
      "react-hot-loader/babel",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-optional-chaining",
      "babel-plugin-styled-components",
      [
        "react-intl",
        {
          messagesDir: "./translations",
        },
      ],
    ],
    env: {
      test: {
        presets: ["@babel/preset-env", "@babel/react"],
      },
    },
  };
};
