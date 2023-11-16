import { SERVICE_BASE_URL } from '../config'
import { DriversResponse } from '../dto/drivers'

class GetDrivers {
  public async execute (year: string): Promise<DriversResponse | null> {
    try {
      const response = await fetch(`${SERVICE_BASE_URL}/${year}/driverStandings.json`)

      const { MRData } = await response.json()
      return MRData.StandingsTable?.StandingsLists[0]
    } catch (err: any) {
      console.error(`Error getting drivers,${err}`)
      return null
    }
  }
}

const getDrivers = () =>
  new GetDrivers()

export default getDrivers
