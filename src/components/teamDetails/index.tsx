import { ConstructorStandings } from '../../services/dto/teams'
import React from 'react'

import './index.scss'

const TeamDetails = ({ team }: { team: ConstructorStandings }) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = event.target as HTMLImageElement
    img.src = 'src/assests/drivers/default.png'
  }
  return (
    <article key={team.Constructor.constructorId} className={`team-info ${team.Constructor.constructorId}`}>
      <span className='position'>{team.position}</span>
      <img
        src={`src/assests/teams/cars/${team.Constructor.constructorId}.avif`} alt={team.Constructor.constructorId} className='picture' onError={handleImageError}
      />
      <span className='name'>{team.Constructor.name}</span>
      <span className='pilots'>Drivers</span>
      <span className='points'>{team.points} Pts</span>
    </article>
  )
}

export default TeamDetails
