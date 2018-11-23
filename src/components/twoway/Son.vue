<template>
  <div class="son">
    <div class="input" :value="value"> {{visible}} </div>
  </div>
</template>

<script>
export default {
  name: "son",
  props: {
    value: String
  },
  data () {
    return {
      visible:false
    }
  },
  mounted() {
    if (this.value) {
      this.visible = this.value;
    }
  },
  watch:{
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit('input', val);
      }
  }
};
</script>
<style>
.input {
  border: 1px solid #efeffe;
}
</style>