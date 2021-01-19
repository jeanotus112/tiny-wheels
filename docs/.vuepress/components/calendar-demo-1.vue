<template>
  <div class="container">
    <div class="tiny-calendar">
        <div class="head">
          <div class="left"></div>
          <div class="right">
            <button class="pre"> &lt; </button>
            <button class="tdBtn"> 今天 </button>
            <button class="next"> &gt; </button>
          </div>
        </div>
        <div class="week-title">
          <div class="week">周日</div>
          <div class="week">周一</div>
          <div class="week">周二</div>
          <div class="week">周三</div>
          <div class="week">周四</div>
          <div class="week">周五</div>
          <div class="week">周六</div>
        </div>
      <ul id="my-calendar" class="calendar-panel"></ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    import('../../../dist/index.js').then(module => {
      const { Calendar } = module
      new Calendar()
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
