---
title: Tabs
---

## 基础用法

### 效果

<ClientOnly><tabs-demo-1></tabs-demo-1></ClientOnly>

### 配置

通过`data-tab-name`可以设置选项卡的名字

```html
<div class="tabs">
  <div data-tab-name="选项卡1">内容1</div>
  <div data-tab-name="选项卡2">内容2</div>
  <div data-tab-name="选项卡3">内容3</div>
  <div data-tab-name="选项卡4">内容4</div>
</div>
```

```javascript
new Tabs(document.querySelector('.tabs'))
```

## 默认选中项

### 效果

<ClientOnly><tabs-demo-2></tabs-demo-2></ClientOnly>

### 配置

如果要设置默认的选中项，需要先给每一项绑定`data-tab-key`，然后设置`data-tab-active`的值为特定项的`data-tab-key`

- data-tab-key 的值可以是任意字符串，但不能重复

- 如果不设置 data-tab-active，则默认选中第一个选项卡

```html
<div class="tabs" data-tab-active="2">
  <div data-tab-name="选项卡1" data-tab-key="1">内容1</div>
  <div data-tab-name="选项卡2" data-tab-key="2">内容2</div>
  <div data-tab-name="选项卡3" data-tab-key="3">内容3</div>
  <div data-tab-name="选项卡4" data-tab-key="4">内容4</div>
</div>
```

```javascript
new Tabs(document.querySelector('.tabs'))
```

## 禁用选项卡

### 效果

<ClientOnly><tabs-demo-3></tabs-demo-3></ClientOnly>

### 配置

如果要设置禁用的选项卡，需要先给每一项绑定`data-tab-key`，然后设置`data-tab-disabled`的值设置为特定项的`data-tab-key`

```html
<div class="tabs" data-tab-disabled="3">
  <div data-tab-name="选项卡1" data-tab-key="1">内容1</div>
  <div data-tab-name="选项卡2" data-tab-key="2">内容2</div>
  <div data-tab-name="选项卡3" data-tab-key="3">内容3</div>
  <div data-tab-name="选项卡4" data-tab-key="4">内容4</div>
</div>
```

## 参数

`Tabs`构造函数接受两个参数：

- 第一个参数为当前需要绑定的 tabs 元素，必填
- 第二个参数为选项卡被选中时触发的回调函数，返回当前点击的元素和索引，选填

```javascript
new Tabs(document.querySelector('.tabs'), ($tab, index) => {
  console.log($tab, index)
})
```

## API

- data-tab-name：选项卡的名字，必填
- data-tab-key：如果需要设置 data-tab-active 或 data-tab-disabled，则必填
- data-tab-active：选中选项卡的 data-key，选填
- data-tab-disabled：禁用选项卡的 data-key，选填
