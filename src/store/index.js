import { createStore } from 'vuex'
import userModule from './userModule'
import organisationModule from './organisationModule'

export default createStore({
  modules: {
    user: userModule,
    organisation: organisationModule
  }
})