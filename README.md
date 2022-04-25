# ffe-utils

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/weeui/ffe-utils?style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/weeui/ffe-utils?style=flat-square) ![GitHub top language](https://img.shields.io/github/languages/top/weeui/ffe-utils?style=flat-square) ![GitHub language count](https://img.shields.io/github/languages/count/weeui/ffe-utils?style=flat-square)
## 📒 介绍

前端开发中常用函数工具集合。

## 🔧 安装教程

```
npm install ffe-utils --save-dev
```

## 💻 使用说明

当前包含常用函数：
- `insertCSS` 插入CSS
- `insertJS` 插入JS
- `isAllSpace` 判断输入字符串是否全部为空格
- `trimStrSpace` 去除字符串中首尾的空格
- `isHasSpecialStr` 检测特殊字符
- `compare` 数组对象升降序
- `calculateNum` 计算中英文混合输入字符的长度
- `objCompare` object 排序
- `arrObjectReduce` 数组对象去重
- `flatTree` 树的扁平化遍历
- `getUrlSearchValue` 获取地址栏参数


```
import { insertCSS } from 'ffe-utils'
insertCSS('//exp.com/style.css')
```

## 🤝 参与贡献

欢迎提交 issue，共建 🤝