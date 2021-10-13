import { createStore } from 'vuex'

import { Module } from './modules'
import userModule from './modules/user'
import organisationModule from './modules/organisation'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {}

const modules = {
  [Module.USER]: userModule,
  [Module.ORGANISATION]: organisationModule
}

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules
})
