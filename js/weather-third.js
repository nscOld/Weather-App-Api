"use strict"
const weatherBlock2 = document.querySelector('#weather2');
async function loadWeather(e){
  const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kharkiv&appid=a27a2f9392b912b4f7206dfdfbd4f77b';
//fatch запрос  get методом
  const response = await fetch(server, {
method:'GET',
});

//
const responseResoult = await response.json();
//проверка на работоспособность
if(response.ok){
  getWeather(responseResoult);
} else{
  weatherBlock2.innerHTML = responseResoult.message;
}

function getWeather(data){
  console.log(data);
  const location = data.name;
  const temp = Math.round(data. main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template =`<div class="weather_header2">
  <div class="weather_main2">
    <div class="weather_city2">${location}</div>
    <div class="weather_status2">${weatherStatus}</div>
  </div>
  <div class="weather_icon2">
    <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="clouds">
  </div>
  <div class="weather_temp2">${temp}</div>
  <div class="weather_feels-like2">Feels like: ${feelsLike}</div>
</div>    `;
weatherBlock2.innerHTML=template;
};

}

if (weatherBlock2) {
  loadWeather();
}


