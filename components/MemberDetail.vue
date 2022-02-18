<template>
  <v-card
    max-width='400'
    class='mx-auto'
  >
    <div class='d-flex flex-no-wrap justify-space-between'>
      <div>
        <v-card-title class='text-h5'>
          {{member.login}}
        </v-card-title>

        <v-card-subtitle>
          {{member.login}}
        </v-card-subtitle>
      </div>

      <v-avatar
        class='ma-3'
        size='125'
        tile
      >
        <v-img :src='member.avatar_url'></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import { memberService } from '~/services/memberService'

export default {
  name: 'MemberDetail',
  components: {},
  data() {
    return {
      member: {}
    }
  },
  async fetch() {
    this.member = await memberService.getById(this.$route.params.id)
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
