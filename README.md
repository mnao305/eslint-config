# eslint-config

my eslint config

`eslint:recommended`をベースにルール設定しています。

## install

```sh
npm install -D @mnao305/eslint-config
```

## Usage

Add `.eslintrc.json` to your project.

### JavaScript project

```json
{
  "extends": "@mnao305"
}
```

### TypeScript project

```json
{
  "extends": "@mnao305/eslint-config/presets/typescript"
}
```

### Vue project

Applying rules for Vue3

```json
{
  "extends": "@mnao305/eslint-config/presets/vue"
}
```

### Vue + TypeScript project

```json
{
  "extends": "@mnao305/eslint-config/presets/vue-typescript"
}
```

## version policie

- Major update
  - Changes that can cause new errors
- Minor update
  - Changes that can cause new warnings
- Patch version
  - Changes that do not generate new errors or warnings
