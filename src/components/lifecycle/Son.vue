<template>
  <div class="detail">
    <h3>子组件</h3>
    <grandson></grandson>
  </div>
</template>

<script>
import Grandson from './Grandson'
export default {
    components: {
      Grandson
    },

    beforeCreate() {
      console.log(" 子组件 ----------> beforeCreate");
    },
    created() {
      console.log(" 子组件 ----------> created");
    },
    beforeMount() {
      console.log(" 子组件 ----------> beforeMount");
    },
    mounted() {
      console.log(" 子组件 ----------> mounted");
    },
    beforeUpdate() {
      console.log(" 子组件 ----------> beforeUpdate")
    },
    updated() {
      console.log(" 子组件 ----------> updated");
    },
    beforeDestroy() {
      console.log(" 子组件 ----------> beforeDestroy");
    },
    destroyed() {
      console.log(" 子组件 ----------> destroyed");
    }
    
  }
</script>
