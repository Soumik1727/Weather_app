// forecast.js is for interacting with API

const key = 'fAFOagPd9R2B44PWFpPEQG7FfNVhRF4Z';

//get weather informations
//get weather informations

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data =  await response.json();

    return data[0];

};

// Getting city informations
// Getting city informations

const getCity = async(city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

getCity('kolkata').then( data => {
    return getWeather(data.Key);
}).then( data => {
        console.log(data);
}).catch( err => console.log(err));