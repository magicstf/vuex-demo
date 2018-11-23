<template>
  <div v-if="info.author" class="detail">
    <h2 v-text="info.title"></h2>
    <p>作者：{{info.author.loginname}}发表于：{{$utils.goodTime(info.create_at)}}</p>
    <hr>
    <article v-html="info.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="item in info.replies">
        <p>评论者：{{item.author.loginname}}　评论于：{{$utils.goodTime(item.create_at)}}</p>
        <article v-html="item.content"></article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$route.query.id,
      id: this.$route.params.id,
      info: { }
    }
  },
  created() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      const data = await this.$api.get('topic/'+this.id);
      this.info = data.data.data;
      console.log(data.data.data)
    }
  }
}
</script>
