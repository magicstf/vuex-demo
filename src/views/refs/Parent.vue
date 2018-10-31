<template>
 <div>
  <h1>我是父组件</h1>
  <son ref="msg"></son>
 </div>
</template>
 
<script>
 import Son from '../../components/refs/Son.vue'
 export default {
  components: {Son},
  created () {
    
  },
  mounted: function () {
   console.log(this.$children[0]);
   this.$refs.msg.getMessage('我是子组件！')
  }
 }
</script>