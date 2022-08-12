# 猫猫的各种配置文件

## Eslint

[在这](https://github.com/Cattttttttt/config/tree/master/eslint)

安装: `yarn add -D @notevenaneko/eslint-config`

使用方法:

- [x] Typescript: `extends: ['@notevenaneko/eslint-config']` 以及 `parserOptions.project`
- [x] React: `extends: ['@notevenaneko/eslint-config', '@notevenaneko/eslint-config/react']`
- [x] Vue: `extends: ['@notevenaneko/eslint-config/ts', '@notevenaneko/eslint-config/vue']`
- [x] Prettier: `extends: [/* your config */, '@notevenaneko/eslint-config/prettier']`
- [x] NextJS: `extends: ['@notevenaneko/eslint-config', '@notevenaneko/eslint-config/next']`
- [x] Jest: `extends: [/* your config */, '@notevenaneko/eslint-config/jest']`
- [ ] Node
- [ ] NestJS

## Prettier

安装: `yarn add -D @notevenaneko/prettier-config`

使用方法:

```js
module.exports = {
  ...require('@notevenaneko/prettier-config'),
  /* your rules */
}
```

## zsh & ohmyzsh

安装: `sh -c '$(curl -fsSL https://raw.githubusercontent.com/Cattttttttt/config/master/zsh/install.sh)'`

## iTerm2

Profile 文件

## Vim

`.vimrc`

## Vscode

我为啥要放个 vscode 设置...
