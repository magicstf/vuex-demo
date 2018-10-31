<template>
  <div class="son">
    <p>in son:</p>
    <p>props: {{son}}</p>
    <p>$attrs: {{$attrs}}</p>
    <hr>
    <grandson v-bind="$attrs" v-on="$listeners"></grandson>
  </div>
</template>

<script>
import Grandson from "@/components/about/Grandson.vue"
export default {
  name: "son",
  inheritAttrs: false,
  data() {
    return {

    }
  },
  components: {
    Grandson
  },
  props: {
    son: String
  },
  mounted () {
    this.$emit('from-son',"son");
  }
};
</script>
