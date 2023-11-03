import useDrivers from '../../services/drivers/hooks/useDrivers'

const Drivers = () => {
  const drivers = useDrivers('2023')

  const shouldRenderNoResults = () => {
    return drivers && drivers?.DriverTable?.Drivers.length <= 1
  }

  if (shouldRenderNoResults()) {
    return <></>
  }

  return (
    <>
      {drivers && (
        <main className='drivers'>
          {
            drivers.DriverTable.Drivers.map(driver => {
              return (
                <article key={driver.driverId} className='driver-info'>
                  <img src='src/assests/drivers/image.avif' alt='Mark Zuckerberg' className='picture' />
                  <span className='leaderboard__name'>{driver.givenName} {driver.familyName}</span>
                  <span className='leaderboard__value'>{driver.permanentNumber}</span>
                </article>
              )
            })
            }
        </main>
      )}
    </>
  )
}

export default Drivers
