import { SET_ORGANISATION_NAME } from './types'

export default {
  [SET_ORGANISATION_NAME](state, name) {
    state.name = name
  }
}