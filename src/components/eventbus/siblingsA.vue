<template>
  <div>
    <p>我来自：{{from}}</p>
    <button @click="sendMsg">传值给兄弟B</button>
  </div>
</template>

<script>
import bus from '@/bus.js'
export default {
  data() {
    return {
      from: "",
      to: "siblingsA"
    }
  },
  created() {
   bus.$on('getA', this.getMsg)
  },
  methods: {
    sendMsg(){
      bus.$emit('getB',this.to);
    },
    getMsg(val) {
      console.log(val);
      this.from = val;
    }
  }
}
</script>
