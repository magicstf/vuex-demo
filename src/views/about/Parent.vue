<template>
  <div class="parent">
    <son :son="son" :grandson="grandson" v-on:from-son="handleSon" v-on:from-grandson="handleGrandson"/>
  </div>
</template>

<script>

import Son from "@/components/about/Son.vue";

export default {
  name: "parent",
  data() {
    return {
      msg: "attrs 传值",
      son:"lili",
      grandson:"lala"
    }
  },
  components: {
    Son
  },
  methods: {
    handleSon(data) {
      console.log("come from",data);
    },
    handleGrandson(data) {
      console.log("come from",data);
    }
  }
};
</script>
