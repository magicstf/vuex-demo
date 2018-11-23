<template>
  <div id="wrap" class="wrap">
    <van-popup class="dialog" v-model="show">
      <div class="dialog-header">恭喜你</div>
      <div class="content">something</div>
      <div class="dialog-footer">copyright</div>
    </van-popup>
    <button @click="showPage">点击我</button>
    <div class="footer"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPage() {
      this.show = true;
    },
    closeDialog() {
      this.show = false;
    }
  }
}
</script>

<style lang="less">
body {
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  position: relative;
}
.wrap {
  height: 100%;
  background: pink;
  .dialog {
    height: 500px;
    overflow: scroll;
  }
  .dialog-header {
    height: 200px;
  }
  .content {
    height: 300px;
  }
  .dialog-footer {
    height: 200px;
  }
  .footer {
    height: 900px;
    background: blue;
  }
}
</style>