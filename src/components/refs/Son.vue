<template>
 <h3>{{message}}</h3>
</template>
<script>
 export default {
  data(){
   return{
    message:''
   }
  },
  created () {
    console.log(this.$parent);
  },
  methods:{
   getMessage(msg){
    this.message = msg;
   }
  }
 }
</script>