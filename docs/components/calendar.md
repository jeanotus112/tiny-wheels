---
title: Calendar
---

## 基础用法

### 效果

<ClientOnly><calendar-demo-1></calendar-demo-1></ClientOnly>

### 配置

```html
<div class="carousel">
  <div class="carousel-panel">
    <div class="demo-panel">0</div>
  </div>
  <div class="carousel-panel">
    <div class="demo-panel">1</div>
  </div>
  <div class="carousel-panel">
    <div class="demo-panel">2</div>
  </div>
  <div class="carousel-panel">
    <div class="demo-panel">3</div>
  </div>
</div>
```

```javascript
new Carousel({
  element: document.querySelector('.carousel'),
  height: '200px',
})
```

## 参数

`Carousel`组件构造函数的参数是一个对象，该对象接收五个属性作为配置：

- element：当前需要绑定的 Carousel 元素，必填
- height：容器的高度，必填
- index：初始状态激活项的索引，从0开始，默认展示第一项，选填
- autoplay：是否自动切换，默认为true，选填
- interval：自动切换的时间间隔，单位为毫秒，默认3000ms，选填

```javascript
new Carousel({
  element: document.querySelector('.carousel'),
  height: '300px',
  index: 2,
  interval: 2000,
  autoplay: true
})
```

## API

本组件API为构造函数参数，参考上一小节
