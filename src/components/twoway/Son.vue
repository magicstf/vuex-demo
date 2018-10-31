<template>
  <div class="son">
    <input class="input" type="text" :value="value" @input="updateVal($event.target.value)">
  </div>
</template>

<script>
export default {
  name: "son",
  props: {
    value: String
  },
  methods: {
    updateVal(val) {
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