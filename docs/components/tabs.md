---
title: Tabs
---

## 基础用法

### 效果

<ClientOnly><tabs-demo-1></tabs-demo-1></ClientOnly>

### 配置

通过`data-name`可以设置选项卡的名字

```html
<div class="tiny-tabs">
  <div class="tab-content">
    <div data-name="选项卡1" class="tab-panel">内容1</div>
    <div data-name="选项卡2" class="tab-panel">内容2</div>
    <div data-name="选项卡3" class="tab-panel">内容3</div>
    <div data-name="选项卡4" class="tab-panel">内容4</div>
  </div>
</div>
```

```javascript
new Tabs(document.querySelector('.tiny-tabs'))
```

## 默认选中项

### 效果

<ClientOnly><tabs-demo-2></tabs-demo-2></ClientOnly>

### 配置

如果要设置默认选中项，需要先给每个`tab-panel`绑定`data-key`，然后设置`data-active`的值为对应`data-key`的值

- data-key 的值可以是任意字符串，但不能重复

- 如果不设置 data-active，则默认选中第一个选项卡

```html
<div class="tiny-tabs" data-active="2">
  <div class="tab-content">
    <div data-name="选项卡1" data-key="1" class="tab-panel">内容1</div>
    <div data-name="选项卡2" data-key="2" class="tab-panel">内容2</div>
    <div data-name="选项卡3" data-key="3" class="tab-panel">内容3</div>
    <div data-name="选项卡4" data-key="4" class="tab-panel">内容4</div>
  </div>
</div>
```

```javascript
new Tabs(document.querySelector('.tiny-tabs'))
```

## 禁用选项卡

### 效果

<ClientOnly><tabs-demo-3></tabs-demo-3></ClientOnly>

### 配置

将`data-disabled`设置为`data-key`的值即可禁用对应选项卡

```html
<div class="tiny-tabs" data-disabled="3">
  <div class="tab-content">
    <div data-name="选项卡1" data-key="1" class="tab-panel">内容1</div>
    <div data-name="选项卡2" data-key="2" class="tab-panel">内容2</div>
    <div data-name="选项卡3" data-key="3" class="tab-panel">内容3</div>
    <div data-name="选项卡4" data-key="4" class="tab-panel">内容4</div>
  </div>
</div>
```

## 参数

`Tabs`构造函数接受两个参数：

- 第一个参数为当前需要绑定的 tabs 元素，必填
- 第二个参数为选项卡被选中时触发的回调函数，返回当前点击的元素和索引，选填

```javascript
new Tabs(document.querySelector('.tiny-tabs'), ($tab, index) => {
  console.log($tab, index)
})
```

## API

- data-name：选项卡的名字，必填
- data-key：选项卡的 key，选填
- data-active：选中选项卡的 data-key，选填
- data-disabled：禁用选项卡的 data-key，选填
