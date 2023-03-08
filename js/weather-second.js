"use strict"
const weatherBlock1 = document.querySelector('#weather1');
async function loadWeather(e){
  const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Dnipro&appid=a27a2f9392b912b4f7206dfdfbd4f77b';
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
  weatherBlock1.innerHTML = responseResoult.message;
}

function getWeather(data){
  console.log(data);
  const location = data.name;
  const temp = Math.round(data. main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template =`<div class="weather_header1">
  <div class="weather_main">
    <div class="weather_city1">${location}</div>
    <div class="weather_status1">${weatherStatus}</div>
  </div>
  <div class="weather_icon1">
    <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="clouds">
  </div>
  <div class="weather_temp1">${temp}</div>
  <div class="weather_feels-like1">Feels like: ${feelsLike}</div>
</div>    `;
weatherBlock1.innerHTML=template;
};

}

if (weatherBlock1) {
  loadWeather();
}


