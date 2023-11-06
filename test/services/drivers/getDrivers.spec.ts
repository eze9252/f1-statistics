import { describe, it, expect } from 'vitest'
import getDrivers from '../../../src/services/drivers/getDrivers'
import { DriversResponse } from '../../../src/services/drivers/dto/drivers'

describe('Service drivers', () => {
  const CORRECT_YEAR = '2023'
  const WRONG_YEAR = '18859'
  it('should return drivers when pass a correct year', async () => {
    const expectedResponse: DriversResponse = {
      season: expect.anything(),
      round: expect.anything(),
      DriverStandings: expect.anything()
    }
    const result = await getDrivers().execute(CORRECT_YEAR)

    expect(result).toEqual(expect.objectContaining(expectedResponse))
  })
  it('should return null when pass a wrong year', async () => {
    const expectedResponse = null
    const result = await getDrivers().execute(WRONG_YEAR)

    expect(result).toStrictEqual(expectedResponse)
  })
})
