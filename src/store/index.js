import { createStore } from 'vuex'

export default createStore({
  state: {
    coins: {}
  },
  mutations: {
    loadCoin(state, payload){
      state.coins = payload
    }
  },
  actions: {
    async GetCoin(context){
let data = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd');
let result = await data.json();
      context.commit('loadCoin', result)
    }
  },
  modules: {
  }
})
