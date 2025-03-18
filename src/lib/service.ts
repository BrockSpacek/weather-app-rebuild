const APIKEY = 0

const searchCityName = "Stockton"

const getWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=${APIKEY}&units=imperial`);
    const data = await response.json();

    return data;
}

const getFiveDayWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCityName}&appid=${APIKEY}&units=imperial`);
    const data = await response.json();

    return data;
}


