import { Request, Response } from "express";
import axios from "axios";
import { Location, Weather, Forecast } from "../../types";
import * as dotenv from "dotenv";

dotenv.config();

/* const API_KEY = "effaac890f5c4784bc5203412240906";
const BASE_URL_FORECAST = "http://api.weatherapi.com/v1/forecast.json"; */
const API_KEY = process.env.API_KEY as string;
const BASE_URL = process.env.BASE_URL as string;

export const get = async (req: Request, res: Response) => {
  const { country } = req.params;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: country,
        lang: "pt",
      },
    });

    const location: Location = {
      name: response.data.location.name,
      region: response.data.location.region,
      country: response.data.location.country,
    };

    const weather: Weather = {
      tempC: response.data.current.temp_c,
      windKPH: response.data.current.wind_kph,
      humidity: response.data.current.humidity,
      feelsLikeC: response.data.current.feelslike_c,
      condition: {
        text: response.data.current.condition.text,
        icon: response.data.current.condition.icon,
      },
    };

    const forecastDay = response.data.forecast.forecastday[0];
    const forecast: Forecast = {
      day: {
        maxTempC: forecastDay.day.maxtemp_c,
        minTempC: forecastDay.day.mintemp_c,
        avgHumidity: forecastDay.day.avghumidity,
        avgTempC: forecastDay.day.avgtemp_c,
        condition: {
          text: forecastDay.day.condition.text,
          icon: forecastDay.day.condition.icon,
        },
      },
      hour: forecastDay.hour.map((data: any, index: number) => ({
        hour: index,
        condition: {
          text: data.condition.text,
          icon: data.condition.icon,
        },
        chanceRain: data.chance_of_rain,
        feelsLikeC: data.feelslike_c,
        precipitationMM: data.precip_mm,
        temperatureC: data.temp_c,
        windKPH: data.wind_kph,
      })),
    };

    res.json({
      location: location,
      weather: weather,
      forecast: forecast,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};
