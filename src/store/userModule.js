export const SET_USER_NAME = 'SET_USER_NAME'

export default {
  namespaced: true,
  state: {
    name: null
  },
  mutations: {
    [SET_USER_NAME](state, name) {
      state.name = name
    },
  },
  actions: {},
  getters: {}
}