<template>
  <v-app variant='light'>
    <v-card
      flat
      height='100%'
    >
      <v-toolbar color='primary'>
        <v-app-bar-nav-icon class='icon'></v-app-bar-nav-icon>
        <v-toolbar-title class='text'>Title</v-toolbar-title>
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
.text {
  color: white;
}

.icon {
  color: white;
}
</style>
