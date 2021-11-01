module.exports = {
  extends: ['stylelint-config-standard-scss', './index.js'],
  plugins: [ 'stylelint-scss'],
  rules: {
    // proper linting for scss @-functions
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // prevent side effects if one uses special words like green as keys in maps
    'scss/map-keys-quotes': 'always'
  }
}
