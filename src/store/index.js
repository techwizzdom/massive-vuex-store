import { createStore } from 'vuex'
import userModule from './modules/user'
import organisationModule from './modules/organisation'
import { Module } from './modules'

const state = {}
const actions = ({})
const mutations = ({})
const getters = ({})

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
