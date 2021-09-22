<template>
  <button @click="setUser(userData)">Set user</button>
  <div>First name: {{user?.firstName}}</div>
  <div>Last name: {{user?.lastName}}</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      userData: {
        firstName: 'Domagoj',
        lastName: 'Vidovic'
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['setUser'])
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
