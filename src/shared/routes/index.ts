import { Router} from 'express';
import { WeatherController } from '../controllers';

const router = Router();

router.get('/weather/:country', WeatherController.get)

export {router}