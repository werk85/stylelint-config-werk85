module.exports = {
  extends: ['stylelint-config-styled-components', 'stylelint-config-werk85'],
  overrides: {
    files: ["**/*.{jsx,tsx}"],
    // There is no customSyntax from styled-components available, yet, and
    // processors are discouraged with stylelint 14. Instead, the
    // postcss-css-in-js syntax is used. Note, it has has some know issues and
    // there is some chance that it will be deprecated in some future. See
    // - https://stylelint.io/user-guide/configure/#processors
    // - https://github.com/styled-components/styled-components/issues/3607
    // - https://github.com/stylelint/stylelint/issues/4574
    // - https://github.com/stylelint/postcss-css-in-js/issues/225
    customSyntax: "@stylelint/postcss-css-in-js",
    rules: {
      // Allow simple styled component renamings, like:
      // const Name = styled.h1``
      'no-empty-source': null,

      // Adapt rules to allow styled-component props notation, e.g. display: ${props => ...}
      // see https://github.com/stylelint/stylelint/issues/5185#issuecomment-815900569
      'value-keyword-case': ['lower', {
        ignoreKeywords: ["/(\\.|_)+/"]
      }]
    }
  }
}
