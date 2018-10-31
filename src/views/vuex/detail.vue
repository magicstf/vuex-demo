<template>
  <div class="index">
    {{nickName}}
    <ul>
      <li v-for="(item, index) in topicsList">
        <time>{{ $utils.goodTime(item.create_at) }}</time>
        <button @click="goDetail(item.id)">{{item.title}}</button>
      </li>
    </ul>
  </div>

</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    // nickName() {
    //   return this.$store.state.nickName
    // },
    // topicsList() {
    //   return this.$store.state.topicsList
    // }
    ...mapState(["nickName", "topicsList"])
  }
};
</script>