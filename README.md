# GraphQL-Wrapper
Visit the demo [here](https://graphqlwrapper.herokuapp.com/graphql).

## Technologies used
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white) ![image](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white) ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![image](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## Introduction
* This is a demo of how you can wrap your existing REST API inside a GraphQL API.
* Many popular REST APIs respond with data you may not need. I encountered some of the weather and movie APIs with a lot of unwanted data. 
* GraphQL overcomes this issue by allowing developers to selectively fetch only required data from the API.
* But not all organizations may want to switch from REST API, so an alternative option is to wrap your existing REST API inside GraphQL API.

## About this demo
* I have used the Current Weather Data API of OpenWeatherMap API for the purpose of demonstration.
* The city is set to London by default.
* The following code shows the JSON response from the API.
```
{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 296.15,
    "feels_like": 296.1,
    "temp_min": 293.21,
    "temp_max": 298.15,
    "pressure": 1020,
    "humidity": 61
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.45,
    "deg": 272,
    "gust": 4.02
  },
  "clouds": {
    "all": 75
  },
  "dt": 1623428600,
  "sys": {
    "type": 2,
    "id": 2019646,
    "country": "GB",
    "sunrise": 1623383015,
    "sunset": 1623442617
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
}
```

## Running demo on a local device
1. Clone this repository.
2. Install dependencies using `npm i` command.
3. Generate your API key from [OpenWeatherMap website](https://openweathermap.org/).
4. Create a .env file and add your key as shown in the example file.
5. Alternatively, you can add your key inside the `base_url` od schema.js.
6. Run the project using `npm start`.




