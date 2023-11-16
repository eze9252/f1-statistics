export type ConstructorInfo = {
    'constructorId': string,
    'name': string,
    'nationality': string,
    'url': string,
}

export type ConstructorStandings = {
    'points': string,
    'position': string,
    'positionText':string,
    'wins':string,
    'Constructor': ConstructorInfo
}

export type TeamsResponse = {
    'season': string,
    'round': string,
    'ConstructorStandings': ConstructorStandings[]
};
