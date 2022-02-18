<template>
  <AppBar child-component='member-detail'/>
</template>

<script lang="ts">
import MemberDetail from "~/components/MemberDetail.vue";
import AppBar from '~/layout/AppBar.vue'

export default {
  name: 'MemberDetailView',
  components: {
    AppBar,
    MemberDetail
  },
}
</script>

<style lang="scss" scoped>
</style>
