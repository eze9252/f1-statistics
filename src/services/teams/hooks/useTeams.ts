import getTeams from '../getTeams'
import { useState, useEffect } from 'react'
import { TeamsResponse } from '../../dto/teams'

const useTeams = (year: string): TeamsResponse | null => {
  const [teams, setTeams] = useState<TeamsResponse | null>(null)

  const getDriversService = async () => {
    const teamsResponse = await getTeams().execute(year)
    setTeams(teamsResponse)
  }

  useEffect(() => {
    getDriversService()
  }, [])

  if (!teams) {
    return null
  }

  return teams
}

export default useTeams
