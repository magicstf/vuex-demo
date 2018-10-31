<template>
  <div class="grandson">
    <p>in grandson:</p>
    <p>props: {{grandson}}</p>
    <p>$attrs: {{$attrs}}</p>
    <hr>
  </div>
</template>
<script>
 export default {
  props: {
    grandson: String
  },
  data () {
    return {};
  },
  inheritAttrs: false,
  mounted () {
    this.$emit('from-grandson',"grandson");
  }
 };
</script>