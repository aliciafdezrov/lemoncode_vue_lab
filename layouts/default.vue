<template>
  <v-app>
    <v-card
      flat
      height='100%'
    >
      <AppBar />
      <v-container>
        <Nuxt />
      </v-container>
    </v-card>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'

export default {
  components: { Footer, AppBar }
}
</script>

<style scoped>
</style>
