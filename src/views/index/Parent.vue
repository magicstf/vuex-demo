<template>
  <div class="parent">
    <son :msg="msg" @child-event="ParentEvents"/>
    <div class="username">用户名：{{userName}}</div>
    <div class="sex">性别：{{sex}}</div>
  </div>
</template>

<script>

import Son from "@/components/index/Son.vue";

export default {
  name: "parent",
  data() {
    return {
      msg: "Props 传值",
      userName: '',
      sex: ''
    }
  },
  components: {
    Son
  },
  methods: {
    ParentEvents(data) {
      this.userName = data.name,
      this.sex = data.sex
    }
  }
};
</script>
