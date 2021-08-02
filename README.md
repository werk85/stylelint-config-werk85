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
  extends: 'stylelint-config-werk85/styled'
}
```

### If using scss without styled-components

```js
module.exports = {
  extends: 'stylelint-config-werk85/scss'
}
```

### If using css only

```js
module.exports = {
  extends: 'stylelint-config-werk85'
}
```

For convenience you can add the following npm scripts to your `package.json`

```json
{
  "scripts": {
    "lint:styles": "stylelint src/styles/**/*.scss",
    "lint:styles:fix": "yarn lint:styles --fix",
  }
}
```
