import { Member } from '~/types'

export const memberService = {
  async get(queryParam: string): Promise<Member[]> {
    if(!queryParam) return [];
    const members = await fetch(`https://api.github.com/orgs/${queryParam}/members`, {
      headers: {
        Accept: 'application/json',
      },
    }).then(m => m.json())
    return members
  },
}
