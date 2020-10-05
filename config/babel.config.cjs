module.exports = {
  "env": {
    "test": {
      "plugins": [
        "@babel/plugin-transform-modules-commonjs"
      ],
    },
  },

  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ]
};
