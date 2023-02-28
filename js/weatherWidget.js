const myApi = 'ac1790d66abec840028f86d8eb4c19cb';
const myApiLink = `https://api.openweathermap.org/data/2.5/weather?q=Bobruisk&lang=en&appid=${myApi}&units=metric`;

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

city.addEventListener('change', getWeather)


async function getWeather() {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=${myApi}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
	weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
	weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

function setLocalStorage() {
	localStorage.setItem('city', city.value);
	getWeather();
}
window.addEventListener('beforeunload', setLocalStorage);

//востановление данных

function getLocalStorage() {
	if(localStorage.getItem('city')) {
		city.value = localStorage.getItem('city');
	}
	getWeather();
	}
window.addEventListener('load', getLocalStorage);