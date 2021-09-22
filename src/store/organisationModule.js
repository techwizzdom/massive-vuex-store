export const SET_ORGANISATION_NAME = 'SET_ORGANISATION_NAME'

export default {
  namespaced: true,
  state: {
    name: null,
  },
  mutations: {
    [SET_ORGANISATION_NAME](state, name) {
      state.name = name
    }
  },
  actions: {},
  getters: {}
}