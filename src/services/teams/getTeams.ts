import { SERVICE_BASE_URL } from '../config'
import { TeamsResponse } from '../dto/teams'

class GetTeams {
  public async execute (year: string): Promise<TeamsResponse | null> {
    try {
      const response = await fetch(`${SERVICE_BASE_URL}/${year}/constructorStandings.json`)

      const { MRData } = await response.json()
      return MRData.StandingsTable?.StandingsLists[0]
    } catch (err: any) {
      console.error(`Error getting teams,${err}`)
      return null
    }
  }
}

const getDrivers = () =>
  new GetTeams()

export default getDrivers
