<template>
  <AppBar child-component='member-list'/>
</template>

<script lang="ts">
import MemberList from "~/components/MemberList.vue";
import AppBar from '~/layout/AppBar.vue'

export default {
  name: 'MemberListView',
  components: {
    AppBar,
    MemberList
  },
}
</script>

<style lang="scss" scoped>
.home {
  grid-template-columns: 60% 1fr;
  gap: 3rem;
}
</style>
