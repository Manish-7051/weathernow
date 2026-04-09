# WeatherNow 🌤️

A premium, real-time weather application built with HTML, CSS, and Vanilla JavaScript. 

![WeatherNow Desktop Preview](./assets/preview.png) *(Note: Add a screenshot here and update the path)*

## ✨ Features

- **Real-Time Data**: Get current weather and 5-day forecasts powered by the OpenWeatherMap API.
- **🌍 Multilingual Support**: Accessible natively in English and 13 Indian languages without requiring page reloads.
- **📊 Advanced Atmospheric Metrics**: Beyond temperature, it displays:
  - Air Quality Index (AQI) with PM2.5, PM10, SO2, NO2 breakdowns.
  - Wind speed & direction.
  - Humidity, Pressure, and Visibility.
  - Sunrise and Sunset times accurately adjusted to the searched city's timezone.
- **🎨 Modern Design**: Features a premium dark-mode aesthetic built with CSS Custom Properties, glassmorphic cards, and subtle hover micro-animations.
- **📍 Geolocation**: Instantly fetch weather data for your local area with a single click.

## 🛠️ Technologies Used

- **HTML5** (Semantic structure)
- **CSS3** (Flexbox, CSS Grid, custom properties, responsive design)
- **Vanilla JavaScript** (ES6+, DOM Manipulation, Async/Await for API fetching)
- **[OpenWeatherMap API](https://openweathermap.org/api)** (Weather, Geocoding, Air Pollution, and Forecast endpoints)

## 🚀 Running Locally

You do not need any build tools or packages to run this application!

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Manish-7051/weathernow.git
   cd weathernow
   ```

2. **Serve the app:**
   Since it uses standard web technologies, you can open `index.html` directly in your browser or spin up a quick local web server:
   ```bash
   # Using Python 3
   python3 -m http.server 3000
   ```
3. Navigate to `http://localhost:3000` in your web browser.

## 👨‍💻 Developer

Developed by **Manish Sharma**.

* [GitHub](https://github.com/Manish-7051)
* [LinkedIn](https://www.linkedin.com/in/manish-sharma-7a3516272)
* [Instagram](https://www.instagram.com/mjnyl_x?igsh=MWZmOHc0bmp3Nmp6aw==)


ER Diagram — shows 7 entities (User, City, WeatherData, Forecast, AirQuality, ApiRequest, Language) with primary keys, attributes, data types, and relationships with cardinality.

<img width="2901" height="2001" alt="image" src="https://github.com/user-attachments/assets/664f6f35-8a67-4909-8fc0-57669e5a54a3" />


  
Class Diagram — shows 8 classes (WeatherApp, WeatherService, UIRenderer, LanguageManager, WeatherData, ForecastData, AirQualityData, OpenWeatherMapAPI) with attributes, methods, and association/dependency/composition arrows.

<img width="4706" height="3626" alt="image" src="https://github.com/user-attachments/assets/04c6a0bf-453b-408f-8534-627c7260ce06" />




Use Case Diagram — shows all interactions between the User actor and the OpenWeatherMap API actor, including search, language switch, unit toggle, AQI view, forecast, and include/extend relationships for validation, error handling, and DOM updates.

<img width="2901" height="2181" alt="image" src="https://github.com/user-attachments/assets/fcbeedec-2666-43bc-90d5-1e4be312dc98" />





