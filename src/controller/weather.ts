import OpenWeatherMap from 'openweathermap-ts';
import dotenv from 'dotenv';
import {Request, Response, NextFunction} from 'express';
import {getCode} from 'country-list';
dotenv.config();

var openWeather = new OpenWeatherMap({
    apiKey: process.env.API_KEY as string
});
// console.log(process.env.API_KEY as string)
openWeather.setLanguage('en');
openWeather.setUnits('metric');


const getWeatherbyCity = async(req: Request, res:Response, next:NextFunction)=>{
    var {cityName, stateName, countryName} = req.body;
    try {
        var country: any = getCode(`${countryName}`);
        // console.log(country);
        openWeather.setApiKey(`${process.env.API_KEY}`);
        await openWeather.getCurrentWeatherByCityName({
            cityName,
            state: stateName,
            countryCode: country
        }).then((weatherResult) =>{
            if(weatherResult){
                res.json({
                    status: true,
                    data: weatherResult
                })
            }else{
                res.json({
                    status: false,
                    message: "An error occured, please try again"
                })
            }
        });
        // console.log('weather: ', weather)
        
    } catch (error) {
        console.log(error),
        next(error)
    }
}

export {
    getWeatherbyCity
}