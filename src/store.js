import Vue from "vue";
import Vuex from "vuex";
import $api from './api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nickName:'',
    topicsList: [],
  },
  mutations: {
    // 用户昵称
    setUserInfo(state, nickName) {
      state.nickName = nickName
    },
    // 获取文章列表一
    getTopicsList(state, topicList) {
      state.topicsList = topicList
    }
  },
  actions: {
    // 获取文章列表一
    async getTopicsList(context) {
      console.log("通过actions触发mutations来改变state");
      const list = (await $api.get('topics')).data.data;
      context.commit('getTopicsList',list);
    }
  }
});
