const APIKEY = ""
;

const searchCityName = "Seattle"

export const getWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=${APIKEY}&units=imperial`);
    const data: WeatherInterface = await response.json();

    return data;
}

const getFiveDayWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCityName}&appid=${APIKEY}&units=imperial`);
    const data = await response.json();

    return data;
}


