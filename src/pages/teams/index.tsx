import TeamDetails from '../../components/teamDetails'
import Error from '../../components/error'
import useTeams from '../../services/teams/hooks/useTeams'
import { getCurrentYear } from '../../services/utilities/getCurrentYear'

import './index.scss'

const Teams = () => {
  const currentYear = getCurrentYear()
  const teams = useTeams(currentYear)

  const shouldRenderNoResults = () => {
    return teams && teams?.ConstructorStandings.length < 1
  }

  if (shouldRenderNoResults()) {
    return <Error />
  }

  return (
    <>
      {teams && (
        <main className='teams'>
          <h1 className='f1-black--xxl no-margin'>F1 Teams {currentYear}</h1>
          {
            teams.ConstructorStandings.map(team => {
              return (
                <TeamDetails key={team.position} team={team} />
              )
            })
            }
        </main>
      )}
    </>
  )
}

export default Teams
