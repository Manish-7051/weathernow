const API_KEY = "00043506b57f1bb707752a57e358df35";

// DOM Elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const locationBtn = document.getElementById("location-btn");
const langSelect = document.getElementById("lang-select");
const errorToast = document.getElementById("error-toast");

// Current Weather Elements
const cityName = document.getElementById("city-name");
const currentDate = document.getElementById("current-date");
const currentTemp = document.getElementById("current-temp");
const currentIcon = document.getElementById("current-icon");
const weatherCondition = document.getElementById("weather-condition");
const feelsLike = document.getElementById("feels-like");

// Highlight Elements
const aqiValue = document.getElementById("aqi-value");
const aqiStatus = document.getElementById("aqi-status");
const pm25 = document.getElementById("pm25");
const pm10 = document.getElementById("pm10");
const so2 = document.getElementById("so2");
const no2 = document.getElementById("no2");

const windSpeed = document.getElementById("wind-speed");
const windDeg = document.getElementById("wind-deg");

const sunriseTime = document.getElementById("sunrise-time");
const sunsetTime = document.getElementById("sunset-time");

const humidityValue = document.getElementById("humidity-value");
const pressureValue = document.getElementById("pressure-value");
const visibilityValue = document.getElementById("visibility-value");

const forecastList = document.getElementById("forecast-list");

// State
let currentLang = "en";
let currentCity = "New Delhi"; // Default
let currentCoords = { lat: 28.6139, lon: 77.2090 }; // Default: New Delhi

// Initialize
window.addEventListener("DOMContentLoaded", () => {
    updateLanguageTexts();
    getWeatherByCity(currentCity);
});

// Event Listeners
searchBtn.addEventListener("click", handleSearch);
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
});

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeatherByCoords(latitude, longitude);
            },
            (error) => {
                showError("Location access denied.");
            }
        );
    } else {
        showError("Geolocation not supported by this browser.");
    }
});

langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    updateLanguageTexts();
    // Re-fetch using current coords to get translated weather descriptions
    getWeatherByCoords(currentCoords.lat, currentCoords.lon, currentCity);
});

// Functions
function handleSearch() {
    const query = cityInput.value.trim();
    if (query) {
        getWeatherByCity(query);
    }
}

async function getWeatherByCity(city) {
    try {
        const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        if (geoData.length === 0) {
            showError(translations[currentLang].errorNotFound);
            return;
        }

        const { lat, lon, name } = geoData[0];
        currentCity = name;
        currentCoords = { lat, lon };
        getWeatherByCoords(lat, lon, name);
    } catch (error) {
        showError("Failed to fetch location data.");
    }
}

async function getWeatherByCoords(lat, lon, nameOverride = null) {
    try {
        // Fetch Current Weather
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=${currentLang}&appid=${API_KEY}`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        if(!nameOverride) {
            currentCity = weatherData.name;
            currentCoords = { lat, lon };
        }

        updateCurrentWeather(weatherData, nameOverride || weatherData.name);

        // Fetch Air Quality
        const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        const aqiRes = await fetch(aqiUrl);
        const aqiData = await aqiRes.json();
        updateAQI(aqiData);

        // Fetch 5-Day Forecast
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=${currentLang}&appid=${API_KEY}`;
        const forecastRes = await fetch(forecastUrl);
        const forecastData = await forecastRes.json();
        updateForecast(forecastData);

    } catch (error) {
        showError("Failed to fetch weather data.");
    }
}

function updateCurrentWeather(data, cityNameParam) {
    cityName.textContent = cityNameParam;
    
    // Format Date
    const date = new Date(data.dt * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    currentDate.textContent = date.toLocaleDateString(currentLang, options);

    currentTemp.textContent = Math.round(data.main.temp);
    weatherCondition.textContent = data.weather[0].description;
    feelsLike.textContent = Math.round(data.main.feels_like);

    // Weather Icon
    const iconCode = data.weather[0].icon;
    currentIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    currentIcon.style.display = "block";

    // Highlights
    humidityValue.textContent = data.main.humidity;
    pressureValue.textContent = data.main.pressure;
    visibilityValue.textContent = (data.visibility / 1000).toFixed(1);
    
    windSpeed.textContent = data.wind.speed.toFixed(1);
    windDeg.textContent = data.wind.deg;

    // Sun Times
    const timezoneOffset = data.timezone; // shift in seconds from UTC
    const sunrise = new Date((data.sys.sunrise + timezoneOffset) * 1000);
    const sunset = new Date((data.sys.sunset + timezoneOffset) * 1000);
    
    sunriseTime.textContent = formatTimeUTC(sunrise);
    sunsetTime.textContent = formatTimeUTC(sunset);
}

function formatTimeUTC(dateObj) {
    let hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
}

function updateAQI(data) {
    if (!data.list || data.list.length === 0) return;
    
    const aqi = data.list[0].main.aqi;
    const components = data.list[0].components;

    aqiValue.textContent = aqi;
    pm25.textContent = components.pm2_5.toFixed(1);
    pm10.textContent = components.pm10.toFixed(1);
    so2.textContent = components.so2.toFixed(1);
    no2.textContent = components.no2.toFixed(1);

    const aqiLabels = [
        { label: "aqiGood", class: "status-good" },
        { label: "aqiFair", class: "status-fair" },
        { label: "aqiModerate", class: "status-moderate" },
        { label: "aqiPoor", class: "status-poor" },
        { label: "aqiVeryPoor", class: "status-very-poor" }
    ];

    const statusObj = aqiLabels[aqi - 1] || aqiLabels[0];
    
    aqiStatus.textContent = translations[currentLang][statusObj.label];
    aqiStatus.className = `status-badge ${statusObj.class}`;
}

function updateForecast(data) {
    forecastList.innerHTML = "";
    
    // The forecast is every 3 hours (8 per day). We want one per day roughly around noon.
    const dailyData = [];
    const addedDates = new Set();

    for (let item of data.list) {
        const dateObj = new Date(item.dt * 1000);
        const dateStr = dateObj.toLocaleDateString();
        const hour = dateObj.getHours();

        // Target approx 12:00 PM for the daily forecast, and ensure we only add 1 per day
        if (!addedDates.has(dateStr) && (hour === 12 || hour === 13 || hour === 14 || hour === 15)) {
            dailyData.push(item);
            addedDates.add(dateStr);
        }
        
        // Fallback: if we somehow reach standard 5 days length
        if (dailyData.length === 5) break;
    }
    
    // If we couldn't get exactly 5 days (e.g., late at night), just append distinct days
    if(dailyData.length < 5) {
        for (let item of data.list) {
             const dateObj = new Date(item.dt * 1000);
             const dateStr = dateObj.toLocaleDateString();
             if(!addedDates.has(dateStr)) {
                 dailyData.push(item);
                 addedDates.add(dateStr);
                 if(dailyData.length === 5) break;
             }
        }
    }

    dailyData.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayName = date.toLocaleDateString(currentLang, { weekday: 'short' });
        const dayNum = date.toLocaleDateString(currentLang, { day: 'numeric', month: 'short' });
        const tempMax = Math.round(item.main.temp_max);
        const tempMin = Math.round(item.main.temp_min);
        const iconCode = item.weather[0].icon;
        const desc = item.weather[0].description;

        const div = document.createElement("div");
        div.className = "forecast-item";
        div.innerHTML = `
            <div class="f-date">${dayName}, ${dayNum}</div>
            <div class="f-icon-desc">
                <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="${desc}">
                <span>${desc}</span>
            </div>
            <div class="f-temps">
                ${tempMax}° <span>${tempMin}°</span>
            </div>
        `;
        forecastList.appendChild(div);
    });
}

function updateLanguageTexts() {
    const t = translations[currentLang];
    if (!t) return;

    document.getElementById("app-title").textContent = t.appTitle;
    cityInput.placeholder = t.searchPlaceholder;
    document.getElementById("forecast-title").textContent = t.forecastTitle;
    document.getElementById("highlights-title").textContent = t.highlightsTitle;
    
    document.getElementById("aqi-title").textContent = t.aqiTitle;
    document.getElementById("wind-title").textContent = t.windTitle;
    document.getElementById("sun-title").textContent = t.sunTitle;
    document.getElementById("humidity-title").textContent = t.humidityTitle;
    document.getElementById("pressure-title").textContent = t.pressureTitle;
    document.getElementById("visibility-title").textContent = t.visibilityTitle;
    
    document.getElementById("feels-like-text").childNodes[0].nodeValue = t.feelsLikeText;
    document.getElementById("wind-direction").childNodes[0].nodeValue = t.directionText;
    document.getElementById("sunrise-title").textContent = t.sunriseText;
    document.getElementById("sunset-title").textContent = t.sunsetText;
}

function showError(msg) {
    document.getElementById("error-msg").textContent = msg;
    errorToast.classList.remove("hidden");
    setTimeout(() => {
        errorToast.classList.add("hidden");
    }, 4000);
}
