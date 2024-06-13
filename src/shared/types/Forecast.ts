export interface Location {
  name: string;
  region: string;
  country: string;
}

export interface Weather {
  tempC: number;
  windKPH: number;
  humidity: number;
  feelsLikeC: number;
  condition: {
    text: string;
    icon: string;
  };
}

export interface Forecast {
  day: {
    maxTempC: number;
    minTempC: number;
    avgHumidity: number;
    avgTempC: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: [
    {
      hour: number;
      condition: {
        text: string;
        icon: string;
      };
      chanceRain: number;
      feelsLikeC: number;
      precipitationMM: number;
      temperatureC: number;
      windKPH: number;
    }
  ];
}
