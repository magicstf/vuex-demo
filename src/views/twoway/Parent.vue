<template>
  <div class="parent">
    <h3>双向绑定</h3>
    <!-- <input class="input" type="text" :value="phone" @input="phone=$event.target.value"> -->
    <son v-model="phone"></son>
    <p>{{phone}}</p>
  </div>
</template>

<script>

import Son from "@/components/twoway/Son.vue";

export default {
  name: "parent",
  data() {
    return {
      phone: '133'
    }
  },
  components: {
    Son
  }
};
</script>
<style>
.input {
  border: 1px solid #efeffe;
}
</style>