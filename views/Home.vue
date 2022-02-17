<template>
  <div class="home container grid">
    <MemberList />
  </div>
</template>

<script lang="ts">
import MemberList from "~/components/MemberList.vue";

export default {
  name: 'Home',
  components: {
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
