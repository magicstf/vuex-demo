<template>
  <div class="detail">
    <h3>孙子组件</h3>
  </div>
</template>

<script>
export default {

    beforeCreate() {
      console.log(" 孙子组件 ----------> beforeCreate");
    },
    created() {
      console.log(" 孙子组件 ----------> created");
    },
    beforeMount() {
      console.log(" 孙子组件 ----------> beforeMount");
    },
    mounted() {
      console.log(" 孙子组件 ----------> mounted");
    },
    beforeUpdate() {
      console.log(" 孙子组件 ----------> beforeUpdate")
    },
    updated() {
      console.log(" 孙子组件 ----------> updated");
    },
    beforeDestroy() {
      console.log(" 孙子组件 ----------> beforeDestroy");
    },
    destroyed() {
      console.log(" 孙子组件 ----------> destroyed");
    }
    
  }
</script>
