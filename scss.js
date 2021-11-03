module.exports = {
  extends: ['stylelint-config-werk85'],
  overrides: [
    {
      files: ["**/*.scss"],
      // apply standard scss rules only for scss files
      extends: ['stylelint-config-standard-scss', 'stylelint-config-werk85'],
      plugins: ['stylelint-scss'],
      customSyntax: "postcss-scss",
      rules: {
        // proper linting for scss @-functions
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        
        // prevent side effects if one uses special words like green as keys in maps
        'scss/map-keys-quotes': 'always'
      }
    }
  ],
}
