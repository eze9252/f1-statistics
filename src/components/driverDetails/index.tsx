import { DriverStandings } from '../../services/dto/drivers'
import React from 'react'

import './index.scss'

const DriverDetails = ({ driver }: { driver: DriverStandings }) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = event.target as HTMLImageElement
    img.src = 'src/assests/drivers/default.png'
  }
  return (
    <article key={driver.Driver.driverId} className={`driver-info ${driver.Constructors[0].constructorId}`}>
      <span className='position'>{driver.position}</span>
      <img
        src={`src/assests/drivers/${driver.Driver.code}/image.avif`} alt={driver.Driver.driverId} className='picture' onError={handleImageError}
      />
      <span className='name'>{driver.Driver.givenName} {driver.Driver.familyName}</span>
      <span className='points'>{driver.points} Pts</span>
    </article>
  )
}

export default DriverDetails
