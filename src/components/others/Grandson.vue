<template>
  <div>
    {{msg}}
    <div @click="show">孙组件按钮</div>
  </div>
</template>

<script>
export default {
  inject: ["reload","msg"],
  methods: {
    show() {
      this.reload("我来自孙子组件");
    }
  }
}
</script>
