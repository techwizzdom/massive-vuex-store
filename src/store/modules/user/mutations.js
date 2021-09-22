import { SET_USER_NAME } from './types'

export default {
  [SET_USER_NAME](state, name) {
    state.name = name
  }
}