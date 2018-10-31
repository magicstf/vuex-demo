<template>
  <div>
    <son></son>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import Son from '../../components/others/Son'
export default {
  provide() {
    return {
      reload: this.reload,
      msg: "我来自父组件"
    }
  },
  data() {
    return {
      name: ''
    }
  },
  components: {
    Son
  },
  methods: {
    reload(msg) {
      this.name = msg;
    }
  }
}
</script>
