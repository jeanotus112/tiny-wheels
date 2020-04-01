<template>
  <div class="container">
    <div class="tabs-demo-2 tiny-tabs" data-active="2">
      <div class="tab-content">
        <div data-name="选项卡1" data-key="1" class="tab-panel">内容1</div>
        <div data-name="选项卡2" data-key="2" class="tab-panel">内容2</div>
        <div data-name="选项卡3" data-key="3" class="tab-panel">内容3</div>
        <div data-name="选项卡4" data-key="4" class="tab-panel">内容4</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Tabs } from '../../../dist/index.js'

export default {
  mounted () {
    import('../../../dist/index.js').then(module => {
      const { Tabs } = module
      new Tabs(document.querySelector('.tabs-demo-2'))
    })
  }
}
</script>

<style lang="scss">
.container {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
    padding: 16px;
}
</style>