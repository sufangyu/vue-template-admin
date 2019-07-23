# 只能输入数字指令

**示例**
```html
<input
  v-model="val"
  v-number-only:0="val"
  placeholder="只能输入整数"
/>

<input
  v-model="val"
  v-number-only:1="val"
  placeholder="只能输入最多1位小数数"
/>

<input
  v-model="val"
  v-number-only:2="val"
  placeholder="只能输入最多2位小数数"
/>
```

**参数**
- number: 最多只能{number}位的小数;
- key: v-model 邦定的 key
