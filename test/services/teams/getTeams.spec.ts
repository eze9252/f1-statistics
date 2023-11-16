import { describe, it, expect } from 'vitest'
import getTeams from '../../../src/services/teams/getTeams'
import { TeamsResponse } from '../../../src/services/dto/teams'

describe('Service teams', () => {
  const CORRECT_YEAR = '2023'
  const WRONG_YEAR = '18859'
  it('should return teams when pass a correct year', async () => {
    const expectedResponse: TeamsResponse = {
      season: expect.anything(),
      round: expect.anything(),
      ConstructorStandings: expect.anything()
    }
    const result = await getTeams().execute(CORRECT_YEAR)

    expect(result).toEqual(expect.objectContaining(expectedResponse))
  })
  it('should return null when pass a wrong year', async () => {
    const expectedResponse = null
    const result = await getTeams().execute(WRONG_YEAR)

    expect(result).toStrictEqual(expectedResponse)
  })
})
