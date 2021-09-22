import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    organisation: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setOrganisation(state, organisation) {
      state.organisation = organisation
    }
  },
  actions: {},
  modules: {},
})
