import DriverDetails from '../../components/driverDetails'
import Error from '../../components/error'
import useDrivers from '../../services/drivers/hooks/useDrivers'
import { getCurrentYear } from '../../services/utilities/getCurrentYear'

import './index.scss'

const Drivers = () => {
  const currentYear = getCurrentYear()
  const drivers = useDrivers(currentYear)

  const shouldRenderNoResults = () => {
    return drivers && drivers?.DriverStandings.length < 1
  }

  if (shouldRenderNoResults()) {
    return <Error />
  }

  return (
    <>
      {drivers && (
        <main className='drivers'>
          <h1 className='f1-black--xxl no-margin'>F1 Drivers {currentYear}</h1>
          {
            drivers.DriverStandings.map(driver => {
              return (
                <DriverDetails key={driver.position} driver={driver} />
              )
            })
            }
        </main>
      )}
    </>
  )
}

export default Drivers
