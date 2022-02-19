<template>
  <v-app>
    <v-card
      flat
      height='100%'
    >
      <v-toolbar color='primary' dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
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
  props: ['childComponent']
}
</script>

<style scoped>
</style>
