import getDrivers from '../getDrivers'
import { DriversResponse } from '../../dto/drivers'
import { useState, useEffect } from 'react'

const useDrivers = (year: string): DriversResponse | null => {
  const [drivers, setDrivers] = useState<DriversResponse | null>(null)

  const getDriversService = async () => {
    const driversResponse = await getDrivers().execute(year)
    setDrivers(driversResponse)
  }

  useEffect(() => {
    getDriversService()
  }, [])

  if (!drivers) {
    return null
  }

  return drivers
}

export default useDrivers
