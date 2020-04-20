module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  rules: {
    // is recommended to disable no-descending-specificity rule when writing component-like css code
    // https://github.com/stylelint/stylelint/issues/4271#issuecomment-530006000
    // https://github.com/stylelint/stylelint/issues/3516
    'no-descending-specificity': null,
    'prettier/prettier': [
      true,
      {
        singleQuote: true
      }
    ]
  }
}
