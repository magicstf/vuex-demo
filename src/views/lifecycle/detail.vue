<template>
  <div class="detail">
    <h3>详情页</h3>
  </div>
</template>

<script>
export default {

    beforeCreate() {
      console.log(" detail ----------> beforeCreate");
    },
    created() {
      console.log(" detail ----------> created");
    },
    beforeMount() {
      console.log(" detail ----------> beforeMount");
    },
    mounted() {
      console.log(" detail ----------> mounted");
    },
    beforeUpdate() {
      console.log(" detail ----------> beforeUpdate")
    },
    updated() {
      console.log(" detail ----------> updated");
    },
    beforeDestroy() {
      console.log(" detail ----------> beforeDestroy");
    },
    destroyed() {
      console.log(" detail ----------> destroyed");
    }
    
  }
</script>
