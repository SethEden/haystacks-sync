module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "node_modules/(?!(spacetime)/)"
  ]
};