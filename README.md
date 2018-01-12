# xiguaui components

![xiguaui_logo](./xiguaui_logo.png)

[![npm version](https://img.shields.io/npm/v/xiguaui.svg)](https://www.npmjs.com/package/xiguaui)
[![Build Status](https://img.shields.io/travis/iuap-design/xiguaui/master.svg)](https://travis-ci.org/iuap-design/xiguaui)
[![Coverage Status](https://coveralls.io/repos/github/iuap-design/xiguaui/badge.svg?branch=master)](https://coveralls.io/github/iuap-design/xiguaui?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/xiguaui.svg?style=flat)](https://npmjs.org/package/xiguaui)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/iuap-design/xiguaui.svg)](http://isitmaintained.com/project/iuap-design/xiguaui "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/iuap-design/xiguaui.svg)](http://isitmaintained.com/project/iuap-design/xiguaui "Percentage of issues still open")

`xiguaui` 是在西瓜 `UI` 设计规范和基础组件库 `tinper-bee` 之上构建的新一代企业应用 UI 组件库，目前主要应用于 `DiWork` 产品及其生态服务中。
>针对PC端的react组件库。

## INTRODUCTION

- 特性1
- 特性2

## Components List

组件图谱（全景进度图）
Button

## Useage

```
$ npm i xiguaui -D
```



```
// require component
import { Button } from 'xiguaui'
import { render } from 'react'

// render your component
render(<Button />, Container)

```
 
### 目录说明

```
│   
├── example                           示例工程
│   ├── index.html                    例子html文件
├── lib
│   └── lebra.js
├── src
│   ├── components                    组件目录
│   │   └── Input                     每个组件单独一个文件夹
│   │   	├── __test__              
│   │       │    └── index.js         测试用例
│   │   	├── demo                  例子文件夹
│   │   	│    └── basic            基础例子
│   │   	│        ├── index.js     例子组件
│   │   	│        └── index.less   例子样式
│   │   	├── index.less            组件样式
│   │   	├── index.zh-CN.md        组件中文文档
│   │   	└── index.js              组件
│   ├── style
│   │   ├── theme
│   │   │	└── default.less          默认的UI主题，含有通用变量及组件变量
│   │   ├── mixins.less               通用的mixin
│   │   └── index.less                样式入口文件
│   ├── utils
│   │   └── index.js                  通用工具函数
│   └── index.js                      入口文件
│   
└── test                              测试用例
```

### 开发调试

- 克隆仓库，下载依赖

```
git clone git@github.com:iuap-design/xiguaui.git

cd lebra-components

//如果是集团内部，使用ynpm下载会快一些
npm install -g ynpm-tool & ynpm install

//如果不是，使用npm下载依赖
npm install

```
- 开发调试

生成组件基本目录

```
npm run create Button(组件名称)
```

组件库提供开发调试的组件demo，查看组件示例和开发组件。

```
npm run server Button
```
如果组件有多个示例，如：`./src/components/Input/demo/search`,在组件名后面增加文件名

`npm run server 组件名 [文件名]`

```
npm run server Button basic
```

- 打包构建

```
npm run build
```

- 发布npm

```
npm run pub
```