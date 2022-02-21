<template>
  <v-toolbar color='primary' dark>
    <v-app-bar-nav-icon v-if='isRoot()'></v-app-bar-nav-icon>
    <v-btn icon @click="$nuxt.$router.push('/')" v-else>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>Nuxt App</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    isRoot() {
      return this.$nuxt.$route.name === 'index'
    }
  }
}
</script>

<style scoped>

</style>
