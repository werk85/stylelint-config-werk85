# stylelint-config-werk85

Default stylelint configuration for all werk85 projects

## Installation

```sh
yarn add stylelint-config-werk85 stylelint -D
```

## Usage

Create a `.stylelintrc.json` file in your project root and add the following content

```json
{
  "extends": "stylelint-config-werk85"
}
```

### If you also use scss

```json
{
  "extends": [
    "stylelint-config-werk85",
    "stylelint-config-werk85/scss"
  ]
}
```

### If use styled-components

It is recommended to install the `vscode-styled-components` Extension for having syntax highlighting and IntelliSense for styled-components as well.

```json
{
  "extends": [
    "stylelint-config-werk85",
    "stylelint-config-werk85/styled"
  ]
}
```

## Project additions

Following additions to your project are recommended

### Script

For convenience you can add the following npm scripts to your `package.json`

```json
{
  "scripts": {
    "lint:styles": "stylelint src/**/*.{scss,tsx}",
    "lint:styles:fix": "yarn lint:styles --fix",
  }
}
```

### Recommended extensions

To ensure usage of recommended extension you can add following to `.vscode/extensions.json` within your project.

```json
{
  "recommendations": [
    "styled-components.vscode-styled-components",
    "stylelint.vscode-stylelint"
  ]
}
```

## Trouble shooting

### stylelint does not lint my scss or css files

Make sure to have in your or the workspace VSCode settings the following defined:

```json
"stylelint.validate": [
  "css",
  "scss"
]
```

## How to release

Make sure you have added all files you want to be included in the release in the `package.json`s `files` property.

Logon to NPM Package Registry via

```
npm login
```

Bump version in `package.json` and run

```
npm publish
```