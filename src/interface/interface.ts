interface WeatherInterface{
    name: string,
    weather: {
        description: string,
        main: string,
        icon: string
    }[],
main:{
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number
}
}
