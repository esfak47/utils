module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise"
  ],
  "rules": {
    "semi": ["error", "always"],
    "no-console": "off",
    "no-redeclare": "warn",
    "space-before-function-paren":0,
    "padded-blocks":0
  },
  "env": {
    "mocha": true,
    "node": true,
    "browser": true
  },
};
