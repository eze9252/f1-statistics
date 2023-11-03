import useDrivers from '../../services/drivers/hooks/useDrivers'

const Drivers = () => {
  const drivers = useDrivers('2023')

  const shouldRenderNoResults = () => {
    return drivers && drivers?.DriverTable?.Drivers.length <= 1
  }

  console.log(drivers)
  if (shouldRenderNoResults()) {
    return <></>
  }

  return (
    <>
      {drivers && (
        <ul>
          {
            drivers.DriverTable.Drivers.map(driver => {
              return <li key={driver.driverId}>{driver.driverId}</li>
            })
            }
        </ul>
      )}
    </>
  )
}

export default Drivers
