import express, {Request as req, Response as res, NextFunction as next} from 'express';
const router = express.Router();
import {getWeatherbyCity} from '../controller/weather';

router
.post('/getWeather', getWeatherbyCity);

export {
    router
}