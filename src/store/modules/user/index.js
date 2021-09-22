import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  name: null,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}