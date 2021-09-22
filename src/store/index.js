import { createStore } from 'vuex'
import userModule from './modules/user'
import organisationModule from './modules/organisation'

const state = {}
const actions = ({})
const mutations = ({})
const getters = ({})

const modules = {
  user: userModule,
  organisation: organisationModule
}

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules
})
