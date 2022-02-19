<template>
  <v-app>
    <v-card
      flat
      height='100%'
    >
      <v-toolbar color='primary' dark>
        <v-app-bar-nav-icon v-if="isRoot()"></v-app-bar-nav-icon>
        <v-btn icon @click="$nuxt.$router.push('/')" v-else>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>App</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <component v-bind:is='childComponent'></component>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'AppBar',
  props: ['childComponent'],
  methods: {
    isRoot() {
      return this.$nuxt.$route.name === 'index'
    }
  }
}
</script>

<style scoped>
</style>
