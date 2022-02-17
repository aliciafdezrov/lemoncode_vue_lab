<template>
  <v-card>
    <v-card-title>
      Github Members
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="members"
    >
      <template v-slot:item.avatar_url="{ item }">
        <v-avatar>
          <img
            :src="item.avatar_url"
            :alt="item.login"
          >
        </v-avatar>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Member } from '~/types'
import { memberService } from '~/services/memberService'

export default {
  components: {},
  data() {
    return {
      search: 'lemoncode',
      headers: [
        {
          text: 'Avatar',
          align: 'start',
          filterable: false,
          value: 'avatar_url',
        },
        { text: 'Login', value: 'login' },
      ],
      members: [] as Member[]
    };
  },
  async fetch() {
    this.members = await memberService.get(this.search)
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.product-list {
  padding: 0;

  li {
    margin-bottom: 2em;
  }
}

.product-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}

.product-container__content {
  margin-left: 10px;
}

.button {
  align-self: stretch;
}
</style>
