import useDrivers from '../../services/drivers/hooks/useDrivers'

const Drivers = () => {
  const drivers = useDrivers('2023')

  console.log(drivers)
  const shouldRenderNoResults = () => {
    return drivers && drivers?.DriverStandings.length <= 1
  }

  if (shouldRenderNoResults()) {
    return <></>
  }

  return (
    <>
      {drivers && (
        <main className='drivers'>
          {
            drivers.DriverStandings.map(driver => {
              return (
                <article key={driver.Driver.driverId} className={`driver-info ${driver.Constructors[0].constructorId}`}>
                  <span className='position'>{driver.position}</span>
                  <img src={`src/assests/drivers/${driver.Driver.code}/image.avif`} alt={driver.Driver.driverId} className='picture' />
                  <span className='name'>{driver.Driver.givenName} {driver.Driver.familyName}</span>
                  <span className='points'>{driver.points} PTS</span>
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
