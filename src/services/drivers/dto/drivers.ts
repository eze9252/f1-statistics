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

export type DriversResponse = {
    'xmlns': string,
    'series': string,
    'url': string,
    'limit': string,
    'offset': string,
    'total': string,
    'DriverTable':{
        'season': string,
        'Drivers': DriverInfo[]
    }
};
