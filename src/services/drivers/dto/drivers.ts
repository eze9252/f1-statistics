export type DriverInfo = {
    'driverId': string,
    'permanentNumber': string,
    'code': string,
    'url': string,
    'givenName': string,
    'familyName': string,
    'dateOfBirth': string,
    'nationality': string
}

export type ConstructorInfo = {
    'constructorId': string,
    'name': string,
    'nationality': string,
    'url': string,
}

export type DriverStandings = {
    'points': string,
    'position': string,
    'positionText':string,
    'wins':string,
    'Driver': DriverInfo,
    'Constructors': ConstructorInfo[]
}

export type DriversResponse = {
    'season': string,
    'round': string,
    'DriverStandings': DriverStandings[]
};
