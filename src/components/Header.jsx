import { useWeather } from "../context/WeatherContext";
import { useFormik } from "formik";
import "../App.css";
function Header() {
  const {
    citiesData,
    currentCity,
    setCurrentCity,
    dayObj,
    cityName,
    cityList,
  } = useWeather();

  const weatherDesc = [
    { description: ["light rain", "Hafif Yağmurlu"] },
    { description: ["clear sky", "Açık Hava"] },
    { description: ["overcast clouds", "Bulutlu"] },
    { description: ["scattered clouds", "Dağınık Bulutlu"] },
    { description: ["few clouds", "Az Bulutlu"] },
    { description: ["light snow", "Hafif Karlı"] },
    { description: ["broken clouds", "Parçalı Bulutlu"] },
    { description: ["moderate rain", "Ilımlı Yağmur"] },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      setCurrentCity(citiesData.find((item) => item.name === values.name));
    },
  });

  return (
    <div>
      <form className="weather_form">
        <select
          className="weather_select"
          name="name"
          value={currentCity.name}
          onChange={(e) => {
            formik.handleChange(e);
            formik.handleSubmit();
          }}
        >
          {citiesData.map((res) => (
            <option className="weather_option" key={res.id} value={res.name}>
              {res.name}
            </option>
          ))}
        </select>
      </form>

      <h1 className="weather_name">{cityName.split(" ", 1)}</h1>
      <div className="header_content">
        <div className="weather_header">
          {cityList.map((weather, idx) => {
            if (idx === 0) {
              return (
                <div className="weather_div" key={idx}>
                  <div className="weather_top">
                    <div className="weather_gün">
                      <h3 className="gun_h3">
                        {dayObj.map((item) =>
                          item.day[0] ===
                          new Date(weather.dt * 1000).toString().split(" ")[0]
                            ? item.day[1]
                            : null
                        )}
                      </h3>
                      <div>{weather.dt_txt.split("", 10)}</div>
                      <span className="day-info">
                        {weather.sys.pod === "n" ? "Gece" : "Gündüz"}
                      </span>
                    </div>
                    <div className="weather_content">
                      <img
                        className="images"
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather"
                      />

                      <div>
                        {weatherDesc.map((item) =>
                          item.description[0] === weather.weather[0].description
                            ? item.description[1]
                            : ""
                        )}
                      </div>

                      <span className="dark">
                        {weather.main.temp.toFixed(1)}°{" "}
                      </span>
                      <span className="soft">
                        Hissedilen={weather.main.feels_like.toFixed(1)}°
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </div>

        <div className="weather_header">
          {cityList.map((weather, idx) => {
            if (idx === 8) {
              return (
                <div className="weather_div" key={idx}>
                  <div className="weather_top">
                    <div className="weather_gün">
                      <h3 className="gun_h3">
                        {dayObj.map((item) =>
                          item.day[0] ===
                          new Date(weather.dt * 1000).toString().split(" ")[0]
                            ? item.day[1]
                            : null
                        )}
                      </h3>
                      <div>{weather.dt_txt.split("", 10)}</div>
                      <span className="day-info">
                        {weather.sys.pod === "n" ? "Gece" : "Gündüz"}
                      </span>
                    </div>
                    <div className="weather_content">
                      <img
                        className="images"
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather"
                      />

                      <div>
                        {weatherDesc.map((item) =>
                          item.description[0] === weather.weather[0].description
                            ? item.description[1]
                            : ""
                        )}
                      </div>

                      <span className="dark">
                        {weather.main.temp.toFixed(1)}°{" "}
                      </span>
                      <span className="soft">
                        Hissedilen={weather.main.feels_like.toFixed(1)}°
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </div>

        <div className="weather_header">
          {cityList.map((weather, idx) => {
            if (idx === 16) {
              return (
                <div className="weather_div" key={idx}>
                  <div className="weather_top">
                    <div className="weather_gün">
                      <h3 className="gun_h3">
                        {dayObj.map((item) =>
                          item.day[0] ===
                          new Date(weather.dt * 1000).toString().split(" ")[0]
                            ? item.day[1]
                            : null
                        )}
                      </h3>
                      <div>{weather.dt_txt.split("", 10)}</div>
                      <span className="day-info">
                        {weather.sys.pod === "n" ? "Gece" : "Gündüz"}
                      </span>
                    </div>
                    <div className="weather_content">
                      <img
                        className="images"
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather"
                      />

                      <div>
                        {weatherDesc.map((item) =>
                          item.description[0] === weather.weather[0].description
                            ? item.description[1]
                            : ""
                        )}
                      </div>

                      <span className="dark">
                        {weather.main.temp.toFixed(1)}°{" "}
                      </span>
                      <span className="soft">
                        Hissedilen={weather.main.feels_like.toFixed(1)}°
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </div>
        <div className="weather_header">
          {cityList.map((weather, idx) => {
            if (idx === 24) {
              return (
                <div className="weather_div" key={idx}>
                  <div className="weather_top">
                    <div className="weather_gün">
                      <h3 className="gun_h3">
                        {dayObj.map((item) =>
                          item.day[0] ===
                          new Date(weather.dt * 1000).toString().split(" ")[0]
                            ? item.day[1]
                            : null
                        )}
                      </h3>
                      <div>{weather.dt_txt.split("", 10)}</div>
                      <span className="day-info">
                        {weather.sys.pod === "n" ? "Gece" : "Gündüz"}
                      </span>
                    </div>
                    <div className="weather_content">
                      <img
                        className="images"
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather"
                      />

                      <div>
                        {weatherDesc.map((item) =>
                          item.description[0] === weather.weather[0].description
                            ? item.description[1]
                            : ""
                        )}
                      </div>

                      <span className="dark">
                        {weather.main.temp.toFixed(1)}°{" "}
                      </span>
                      <span className="soft">
                        Hissedilen={weather.main.feels_like.toFixed(1)}°
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </div>

        <div className="weather_header">
          {cityList.map((weather, idx) => {
            if (idx === 32) {
              return (
                <div className="weather_div" key={idx}>
                  <div className="weather_top">
                    <div className="weather_gün">
                      <h3 className="gun_h3">
                        {dayObj.map((item) =>
                          item.day[0] ===
                          new Date(weather.dt * 1000).toString().split(" ")[0]
                            ? item.day[1]
                            : null
                        )}
                      </h3>
                      <div>{weather.dt_txt.split("", 10)}</div>
                      <span className="day-info">
                        {weather.sys.pod === "n" ? "Gece" : "Gündüz"}
                      </span>
                    </div>
                    <div className="weather_content">
                      <img
                        className="images"
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather"
                      />

                      <div>
                        {weatherDesc.map((item) =>
                          item.description[0] === weather.weather[0].description
                            ? item.description[1]
                            : ""
                        )}
                      </div>

                      <span className="dark">
                        {weather.main.temp.toFixed(1)}°{" "}
                      </span>
                      <span className="soft">
                        Hissedilen={weather.main.feels_like.toFixed(1)}°
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </div>

        <div className="weather_header">
          {cityList.map((weather, idx) => {
            if (idx === 39) {
              return (
                <div className="weather_div" key={idx}>
                  <div className="weather_top">
                    <div className="weather_gün">
                      <h3 className="gun_h3">
                        {dayObj.map((item) =>
                          item.day[0] ===
                          new Date(weather.dt * 1000).toString().split(" ")[0]
                            ? item.day[1]
                            : null
                        )}
                      </h3>
                      <div>{weather.dt_txt.split("", 10)}</div>
                      <span className="day-info">
                        {weather.sys.pod === "n" ? "Gece" : "Gündüz"}
                      </span>
                    </div>
                    <div className="weather_content">
                      <img
                        className="images"
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather"
                      />

                      <div>
                        {weatherDesc.map((item) =>
                          item.description[0] === weather.weather[0].description
                            ? item.description[1]
                            : ""
                        )}
                      </div>

                      <span className="dark">
                        {weather.main.temp.toFixed(1)}°{" "}
                      </span>
                      <span className="soft">
                        Hissedilen={weather.main.feels_like.toFixed(1)}°
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
