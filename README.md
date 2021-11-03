# stylelint-config-werk85

Default stylelint configuration for all werk85 projects

## Installation

```sh
yarn add stylelint-config-werk85 stylelint -D
```

## Usage

Create a `.stylelintrc.js` file in your project root and add the following content

### If using styled-components and scss

```js
module.exports = {
  extends: [
    'stylelint-config-werk85/scss',
    'stylelint-config-werk85/styled'
  ]
}
```

### If using scss without styled-components

```js
module.exports = {
  extends: ['stylelint-config-werk85/scss']
}
```

### If using css only

```js
module.exports = {
  extends: ['stylelint-config-werk85']
}
```

For convenience you can add the following npm scripts to your `package.json`

```json
{
  "scripts": {
    "lint:styles": "stylelint src/**/*.{css,scss,jsx,tsx}",
    "lint:styles:fix": "yarn lint:styles --fix",
  }
}
```

## VScode extension

By default the stylelint extension >=1.0 validates only CSS and PostCSS files. Any other files (e.g. scss) must be added in the VScode config. Add `javascriptreact` and/or `typescriptreact` for styled-components.

``` json
"stylelint.validate": ["css", "postcss", "scss", "javascriptreact", "typescriptreact"]
```

## Troubleshooting

> Cannot resolve custom syntax module "@stylelint/postcss-css-in-js".

If stylint complaints that a custom syntax cannot be resolved then try to update postcss to >= 8.3.11 (e.g. via resolutions).
