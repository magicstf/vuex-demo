<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <button @click="toParents">传值给父组件</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      params: {
        name: "苏腾飞",
        sex: "男"
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
    toParents() {
      this.$emit("child-event",this.params);
    }
  }
};
</script>
