<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class='indigo lighten-1 content'
    >
      <v-card-text class='white--text text-center'>
        © 2022 Alicia Fdez
        <v-btn
          class='mx-4 white--text'
          icon
          target='_blank'
          href='https://github.com/aliciafdezrov'
        >
          <v-icon size='24px'>
            mdi-github
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.content {
  width: 100%;
}
</style>
