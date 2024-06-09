import { Router, Request, Response } from 'express';
import axios from 'axios';

const API_KEY = 'effaac890f5c4784bc5203412240906'; // Substitua pela sua chave da WeatherAPI
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export const get = async (req: Request, res: Response) => {
    const { country } = req.params;

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: country,
            },
        });

        const { temp_c, temp_f } = response.data.current;
        res.json({ temperatureC: temp_c, temperatureF: temp_f });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};
