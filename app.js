document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name!');
    }
});

async function getWeatherData(city) {
    const apiKey = 'a2bb346f363568c5ef75df2cf88b19bc'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeatherData(data);
        } else {
            alert('City not found!');
        }
    } catch (error) {
        alert('Error fetching weather data!');
        console.error(error);
    }
}

function displayWeatherData(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
