<template>
    <div>
      <p>我来自：{{from}}</p>
      <button @click="sendMsg">传值给组件A</button>
    </div>
    
</template>

<script>
import bus from '@/bus.js'
export default {
  data() {
    return {
      from: "",
      to: "siblingsB"
    }
  },
  created(){
    bus.$on('getB', this.getMsg)
  },
  methods: {
    sendMsg() {
      bus.$emit('getA',this.to);
    },
    getMsg(val){
      console.log(val);
      this.from = val;
    }
  }
}
</script>