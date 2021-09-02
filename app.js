const API_KEY = `9655bc05724277a20afaebc08b565f1b`;
const searchTemperature = () => {
    const city_name = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
    document.getElementById('city-name').value = '';
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temperature => {

    setInnerText('city', temperature.name);
    setInnerText('temp-in-degree', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    console.log(temperature);

    // set weather icon 
    const iconURL = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    // console.log(iconURL)
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', iconURL)
}