<template>
  <div class="index">
   <input class="input" type="text" v-model="nickName">
   <button @click="update">提交</button>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      nickName: ''
    }
  },
  methods: {
    ...mapMutations([
      'setUserInfo',
    ]),
    ...mapActions([
      'getTopicsList'
    ]),
    update() {
      // this.$store.commit("setUserInfo",this.nickName);
      // this.$store.dispatch("getTopicsList");
      this.setUserInfo(this.nickName);
      this.getTopicsList();
      this.$router.push({
        path: '/vuex/detail'
      })
    }
  }
}
</script>
<style>
.input {
  border: 1px solid #efeffe;
}
</style>