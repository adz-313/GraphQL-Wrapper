const graphql = require('graphql');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLFloat, GraphQLList } = graphql;

const base_url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&q=London`;

// Sub queries
const CoordinateType = new GraphQLObjectType({
    name: 'Coordinates',
    fields: () => ({
        lon: { type: GraphQLFloat },
        lat: { type: GraphQLFloat },
    })
});

const WeatherType = new GraphQLObjectType({
    name: 'Weather',
    fields: () => ({
        id: { type: GraphQLInt },
        main: { type: GraphQLString },
        description: { type: GraphQLString },
        icon: { type: GraphQLString },
    })
});

const TemperatureType = new GraphQLObjectType({
    name: 'Temperature',
    fields: () => ({
        temp: { type: GraphQLFloat },
        feels_like: { type: GraphQLFloat },
        temp_min: { type: GraphQLFloat },
        temp_max: { type: GraphQLFloat },
        pressure: { type: GraphQLInt },
        humidity: { type: GraphQLInt },
    })
});

const WindType = new GraphQLObjectType({
    name: 'wind',
    fields: () => ({
        speed: { type: GraphQLFloat },
        deg: { type: GraphQLInt },
        gust: { type: GraphQLFloat },
    })
});

const CloudType = new GraphQLObjectType({
    name: 'cloud',
    fields: () => ({
        all: { type: GraphQLInt },
    })
});

const SysType = new GraphQLObjectType({
    name: 'sys',
    fields: () => ({
        type: { type: GraphQLInt },
        id: { type: GraphQLInt },
        country: { type: GraphQLString },
        sunrise: { type: GraphQLInt },
        sunset: { type: GraphQLInt },
    })
});

// Main query
const CityType = new GraphQLObjectType({
    name: 'City',
    fields: () => ({
        name: { type: GraphQLString },
        timezone: { type: GraphQLInt },
        id: { type: GraphQLInt },
        cod: { type: GraphQLInt },
        main: {
            type: TemperatureType,
            resolve: json => json.main
        },
        coord: {
            type: CoordinateType,
            resolve: json => json.coord
        },
        weather: {
            type: new GraphQLList(WeatherType),
            resolve: json => json.weather
        },
        base: { type: GraphQLString },
        visibility: { type: GraphQLInt },
        dt: { type: GraphQLInt },
        wind: {
            type: WindType,
            resolve: json => json.wind
        },
        cloud: {
            type: CloudType,
            resolve: json => json.cloud
        },
        sys: {
            type: SysType,
            resolve: json => json.sys
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        city: {
            type: CityType,
            resolve: async () => {
                return await fetch(base_url).then(res => res.json());
            } 
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});