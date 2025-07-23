// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }], // No need to import React
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
}
