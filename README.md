# GraphQL-Wrapper
Visit the demo [here](https://graphqlwrapper.herokuapp.com/graphql).

## Introduction
* This is a demo of how you can wrap your existing REST API inside a GraphQL API.
* Many popular REST APIs respond with data you may not need. I encountered some of the weather and movie APIs with a lot of unwanted data. 
* GraphQL overcomes this issue by allowing developers to selectively fetch only required data from the API.
* But not all organizations may want to switch from REST API, so an alternative option is to wrap your existing REST API inside GraphQL API.

## About this demo
* I have used the Current Weather Data API of OpenWeather API for the purpose of demonstration.
* The city is set to London by default.
* The following code shows JSON response from the API.
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




