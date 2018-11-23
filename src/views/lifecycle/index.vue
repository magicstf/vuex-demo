<template>
  <div class="index">
    <son></son>
    <button @click="goDetail">查看详情</button>
  </div>
</template>

<script>
import Son from '../../components/lifecycle/Son'
console.log(",,,,,",this)
export default {
  data(){
    return {
      msg: '哈哈哈',
      window: this
    }
  },
  computed: {
    mymsg () {
      return this.msg + "嘿嘿嘿";
    }
  },
  components: {
    Son
  },
  beforeCreate() {
    console.log(" index ----------> beforeCreate",this.mymsg);
  },
  created() {
    this.test();
    console.log(" index ----------> created",this.window);
  },
  beforeMount() {
    console.log(" index ----------> beforeMount",this.mymsg);
  },
  mounted() {
    console.log(" index ----------> mounted",this.mymsg);
  },
  beforeUpdate() {
    console.log(" index ----------> beforeUpdate",this.mymsg)
  },
  updated() {
    console.log(" index ----------> updated",this.mymsg);
  },
  beforeDestroy() {
    console.log(" index ----------> beforeDestroy",this.mymsg);
  },
  destroyed() {
    console.log(" index ----------> destroyed",this.mymsg);
  },
  methods: {
    goDetail() {
      this.$router.push( {path: '/lifecycle/detail'} )
    },
    test()  {
      console.log("test",this)
    }
  }
}
</script>
