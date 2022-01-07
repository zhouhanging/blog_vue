import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义的内型，方便查看，可在浏览器中显示
const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER: 'SET_USER' // 用户信息
}
// state 数据存储
const state = { // 需要维护的状态
  isAutnenticated: false,  // 是否认证，默认未授权
  user: {}   // 存储用户信息
}
// 数据获取
const getters = {
  isAutnenticated: state => state.isAutnenticated,
  user: state => state.user
}
//数据改变，更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
  //该方法名为SET_IS_AUTNENTIATED，操作的时候回显示这个名字。
  //state：状态   isAutnenticated：是否收授权，有外界传入
  [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
    if (isAutnenticated)
      state.isAutnenticated = isAutnenticated  //外界传入为真，就为外界值
    else
      state.isAutnenticated = false  //否则为假
  }, 
  //设置用户 SET_USER为内型  state，user为传入参数
  [types.SET_USER](state, user) {
    if (user)
      state.user = user
    else
      state.user = {}
  }
}

//Action 类似于 mutation，不同在于：
//   Action 提交的是 mutation，而不是直接变更状态。
//   Action 可以包含任意异步操作。

//提交数据改变动作，可以是异步
const actions = { 
  //调用mutations    commit--> dispatch
  setIsAutnenticated: ({ commit }, isAutnenticated) => {
    commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
  },
  setUser: ({ commit }, user) => {
    commit(types.SET_USER, user)
  },
  clearCurrentState: ({ commit }) => {
    commit(types.SET_IS_AUTNENTIATED, false)
    commit(types.SET_USER, null)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
