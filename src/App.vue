<template>
  <div>
    <p>Welcome to the app</p>
    <p>
      <router-link to='/home'>Go home!</router-link>
      <router-link to="/hello">Go straight to Hell-o!</router-link>
      <router-link to='/another'>Another view</router-link>
      <router-link to='/helloReddit'>Hello Reddit!</router-link>
      <router-view></router-view>
    </p>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'av-ts'

@Component
export default class App extends Vue {
}

</script>
