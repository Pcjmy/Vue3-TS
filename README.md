# vue3-jsonschema-form

## 项目搭建

```shell
> npm install @vue/babel-plugin-jsx -D
> npm install ajv -S
> npm install ajv-i18n -S
> npm install ajv-errors -S
> npm install monaco-editor -D
> npm install vue-jss -S
> npm install jss jss-preset-default -S
> npm install jsonpointer -S
> npm install lodash.topath -S
> npm i --save-dev @types/lodash.union
> npm i --save-dev @types/json-schema-merge-allof
```

[https://github.com/vuejs/babel-plugin-jsx](https://github.com/vuejs/babel-plugin-jsx)
[Ajv JSON schema validator](https://ajv.js.org)
[JSON Schema](https://json-schema.org/)
[ajv-i18n](https://github.com/ajv-validator/ajv-i18n)
[ajv-errors](https://github.com/ajv-validator/ajv-errors)

## 遇到的问题

```shell
1.VSCode没有对props类型进行提醒
解决办法：将.vue文件改为.jsx, 使用jsx语法进行开发
```
