# 自定义指令


项目提供了部分自定义的全局指令, 分别如下:
- 限制输入数字（包含小数）

> 如需自定义全局指令, 可在 `src/directives/` 目录下增加.


## 限制输入数字（包含小数）

### 使用
```js
<input
  v-model="val"
  v-number-only:0="val"
  placeholder="只能输入整数"
/>

<input
  v-model="val"
  v-number-only:1="val"
  placeholder="最多可以输入一位小数"
/>

<input
  v-model="val"
  v-number-only:2="val"
  placeholder="最多可以输入两位小数"
/>
```

### 函数
```js
v-number-only:{number}="{key}"
```
**参数**
- number: 最多可输入小数的个数
- key: v-model 绑定的 data



## 拓展阅读
- [指令](https://cn.vuejs.org/v2/guide/custom-directive.html)