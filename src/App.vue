<template>
  <button @click="setUserName(userNameData)">Set user name</button>
  <div>User name: {{userName}}</div>

  <button @click="setOrganisationName(organisationNameData)">Set organisation name</button>
  <div>Organisation name: {{organisationName}}</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { SET_USER_NAME } from './store/modules/user/types'
import { SET_ORGANISATION_NAME } from './store/modules/organisation/types'
import { Module } from './store/modules'

export default {
  name: 'App',
  data() {
    return {
      userNameData: 'Domagoj Vidovic',
      organisationNameData: 'Orbital Witness'
    }
  },
  computed: {
    ...mapState({
      userName: (state) => state.user.name,
      organisationName: (state) => state.organisation.name
    })
  },
  methods: {
    ...mapMutations(Module.ORGANISATION, {
      setOrganisationName: SET_ORGANISATION_NAME
    }),
    ...mapMutations(Module.USER, {
      setUserName: SET_USER_NAME
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
