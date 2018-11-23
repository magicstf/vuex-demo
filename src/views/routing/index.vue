<template>
  <div class="index">
    <ul>
      <li v-for="(item, index) in data">
        <time>{{ $utils.goodTime(item.create_at) }}</time>
        <button @click="goDetail(item.id)">{{item.title}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    this.getList();
  },
  methods: {
    goDetail(id) {
      // this.$router.push({ path: '/detail', query: { id }})
      this.$router.push({ name: 'detail', params: {id} })
    },
   async getList() {
      const res = await this.$api.get('topics');
      this.data = res.data.data
    }
  }
}
</script>
