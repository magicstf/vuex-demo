<template>
  <div>
    {{form}}
    <grandson></grandson>
    <div @click="show">子组件按钮</div>
  </div>
</template>

<script>
import Grandson from './Grandson'
export default {
  inject: ['reload','msg'],
  data() {
    return {
      form: this.msg
    }
  },
  components: {
    Grandson
  },
  methods: {
    show() {
      this.reload("我来自子组件");
    }
  }
}
</script>
