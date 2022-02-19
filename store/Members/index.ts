import { ActionContext, ActionTree, MutationTree, GetterTree } from 'vuex'
import { IMembersState, MembersActionEnums, MembersActionsType, MembersMutationsType, IMembersGetters, MembersMutationEnums } from '~/store/Members/types'

export const mutations: MutationTree<IMembersState> & MembersMutationsType = {
  [MembersMutationEnums.SET_MEMBER_SEARCH_TERM](state: IMembersState, searchTerm: string) {
    state.membersSearchTerm = searchTerm
  },
}


export const actions: ActionTree<IMembersState, unknown> & MembersActionsType = {
  [MembersActionEnums.SET_MEMBER_SEARCH_TERM](
    { commit }: ActionContext<IMembersState, unknown>,
    searchTerm: string
  ) {
    commit(MembersMutationEnums.SET_MEMBER_SEARCH_TERM, searchTerm)
  },
}


export const state: () => IMembersState = () => ({ membersSearchTerm: 'lemoncode' })


export const getters: GetterTree<IMembersState, unknown> & IMembersGetters = {
  membersSearchTerm: (state: IMembersState) => state.membersSearchTerm,
};
