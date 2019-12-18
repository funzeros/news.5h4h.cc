// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.prototype.$http = axios


Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    channels: '',
    channelIndex: 0,
    channelData: '',
    newDataIndex: '',
    isActive: 0,
    load: true,
    collection: [],
    likeImg: require("./assets/like.png")
  },
  mutations: {
    muChannels(state, data) {
      state.channels = data
    },
    muChannelIndex(state, index) {
      state.channelIndex = index
    },
    muGetData(state, data) {
      state.channelData = data
    },
    muNewDataIndex(state, index) {
      state.newDataIndex = index
    },
    increment(state, index) {
      state.channels.splice(index, 1)
    },
    decrement(state, item) {
      state.channels.push(item)
    },
    loading(state, statu) {
      state.load = statu
    },
    muIsActive(state, index) {
      state.isActive = index
    },
    muCollect(state, data) {
      state.collection.push(data)
      state.collection.reverse()
      window.localStorage.setItem('likelist',JSON.stringify(state.collection))
    },
    muLike(state, data) {
      state.collection.splice(state.collection.indexOf(data), 1)
    },
    muLikeImg(state, url) {
      state.likeImg = url
    }
  },
  actions: {
    acChannels({ commit,state }) {
      return new Promise((resolve, reject) => {
        axios.get('http://fkchen.com:7676/api/getChannel')
          .then(res => {
            commit('muChannels', res.data)
          })
          resolve()
      })
    },
    acGetData({ commit,state }, channel) {
      return new Promise((resolve, reject) => {
        axios.get('http://fkchen.com:7676/api/getNews?name=' + channel)
          .then(res => {
            commit('muGetData', res.data)
            store.state.load = false
          })
          resolve()
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
