<template>
  <div class="container">
    <div class="tabs-demo-1">
      <div data-tab-name="选项卡1">内容1</div>
      <div data-tab-name="选项卡2">内容2</div>
      <div data-tab-name="选项卡3">内容3</div>
      <div data-tab-name="选项卡4">内容4</div>
    </div>
  </div>
</template>

<script>
// import { Tabs } from "../../../dist/index.js";

export default {
  mounted () {
    import('../../../dist/index.js').then(module => {
      const { Tabs } = module
      new Tabs({
        element: document.querySelector('.tabs-demo-1')
      })
    })
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 16px;
}
</style>
