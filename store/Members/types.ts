import { ActionContext } from 'vuex'

export interface IMembersState {
  membersSearchTerm: string
}

export interface IMembersGetters {
  membersSearchTerm(state: IMembersState): string
}

export enum MembersMutationEnums {
  SET_MEMBER_SEARCH_TERM = 'SET_MEMBER_SEARCH_TERM'
}

export type MembersMutationsType<S = IMembersState> = {
  [MembersMutationEnums.SET_MEMBER_SEARCH_TERM](state: S, searchTerm: string): void
}

export enum MembersActionEnums {
  SET_MEMBER_SEARCH_TERM = 'setMembersSearchTerm'
}

export type MembersActionsType<S = IMembersState> = {
  [MembersActionEnums.SET_MEMBER_SEARCH_TERM](
    { commit }: ActionContext<S, unknown>,
    searchTerm: string
  ): void
}
