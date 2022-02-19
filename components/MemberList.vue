<template>
  <v-card>
    <v-card-title>
      {{getTitle()}}
      <v-spacer></v-spacer>
      <v-text-field
        :value='membersSearchTerm'
        append-outer-icon='mdi-magnify'
        label='Search'
        @change='setMembersSearchTerm'
        single-line
        hide-details
        clear-icon='mdi-close-circle'
        clearable
        @click:append-outer='fetchData'
        @click:clear="handleOnClearSearchTerm"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers='headers'
      :items='members'
      :loading="$fetchState.pending"
      loading-text="Calling the members one by one to get the data 🤓"
      :no-data-text="$fetchState.error ? '⚠️ Something went wrong' : '$vuetify.noDataText'"
    >
      <template v-slot:item.avatar_url='{ item }'>
        <v-avatar>
          <img
            :src='item.avatar_url'
            :alt='item.login'
          >
        </v-avatar>
      </template>

      <template v-slot:item.login='{ item }'>
        <NuxtLink :to="{ name: 'members-id', params: { id: item.id } }">{{ item.login }}</NuxtLink>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang='ts'>
import { Member } from '~/types'
import { memberService } from '~/services/memberService'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'member-list',
  components: {},
  data() {
    return {
      headers: [
        {
          text: 'Avatar',
          align: 'center',
          filterable: false,
          value: 'avatar_url'
        },
        {
          text: 'Id',
          value: 'id',
          align: 'center',
          filterable: false
        },
        {
          text: 'Login',
          value: 'login',
          align: 'center',
          filterable: false
        }
      ],
      members: [] as Member[],
      loading: false
    }
  },
  async fetch() {
    this.members = await memberService.get(this.membersSearchTerm)
  },
  computed: {
    ...mapGetters('Members', {
      membersSearchTerm: 'membersSearchTerm'
    }),
  },
  methods: {
    ...mapActions('Members', {
      setMembersSearchTerm: 'setMembersSearchTerm'
    }),
    fetchData() {
      this.$fetch()
    },
    getTitle(): string {
      if (this.membersSearchTerm) {
        return `${this.membersSearchTerm.charAt(0).toUpperCase()}${this.membersSearchTerm.substr(1)} members`
      }
      return 'Github Members'
    },
    handleOnClearSearchTerm() {
      this.setMembersSearchTerm('')
      this.members = []
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
