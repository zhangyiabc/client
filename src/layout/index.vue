<template>
  <div class="layout-container">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-container {
  height: 100%;
  box-sizing: border-box;
  .top {
    height: 50px;
    z-index: 5;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .main {
    position: relative;
    top: 0;
    height: ceil(100 - 50px);
    // margin-top: 50px;
    transform: translate(0, 50px);
  }
}
</style>
