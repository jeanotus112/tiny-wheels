---
title: 快速上手
---

- 模块化引入（推荐）

> npm install tiny-wheels -S

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
import { Tabs } from 'tiny-wheels'

new Tabs(document.querySelector('.tiny-tabs'))
```

- 标签引入

目前可以通过[unpkg.com/tiny-wheels](https://unpkg.com/tiny-wheels/dist/index.js)获取到最新版本的资源，在页面上使用script标签引入后即可开始使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>
    <div class="tiny-tabs">
        <div class="tab-content">
            <div data-name="选项卡1" class="tab-panel">内容1</div>
            <div data-name="选项卡2" class="tab-panel">内容2</div>
            <div data-name="选项卡3" class="tab-panel">内容3</div>
            <div data-name="选项卡4" class="tab-panel">内容4</div>
        </div>
    </div>
    <script src="https://unpkg.com/tiny-wheels/dist/index.js"></script>
    <script>
        new TinyWheels.Tabs(document.querySelector('.tiny-tabs'))
    </script>
</body>
</html>
```

由于项目已经暴露了全局变量`TinyWheels`，所以在浏览器环境可以直接使用，通过标签引入的具体示例可以参考项目根目录下的`example.html`
