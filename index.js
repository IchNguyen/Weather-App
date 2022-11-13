const APP_ID='1e810c6d045c5f10c32bd90f0d39b042'
const DEFAULT= "--";

const search=document.querySelector("#search-input")
const cityName=document.querySelector(".city-name")
const weatherState=document.querySelector(".weather-state")
const iconTemp=document.querySelector(".icontemp")
const temperature=document.querySelector(".temperature")

const sunrise=document.querySelector(".sunrise")
const sunset=document.querySelector(".sunset")
const humidity=document.querySelector(".humidity")
const windSpeed=document.querySelector(".wind-speed")

console.log(sunrise);
search.addEventListener("change", (e) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&limit=5&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res =>{
            const data = await res.json()
            console.log('[Search Input]', data);
            cityName.innerHTML=data.name || DEFAULT;
            weatherState.innerHTML=data.weather[0].description || DEFAULT;
            iconTemp.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            temperature.innerHTML=Math.round(data.main.temp) || DEFAULT;

            sunrise.innerHTML=moment.unix(data.sys.sunrise).format('H:mm')|| DEFAULT;
            sunset.innerHTML=moment.unix(data.sys.sunset).format('H:mm')|| DEFAULT;
            humidity.innerHTML=data.main.humidity || DEFAULT;
            windSpeed.innerHTML=(data.wind.speed * 3.6).toFixed(2) || DEFAULT;

        })
})