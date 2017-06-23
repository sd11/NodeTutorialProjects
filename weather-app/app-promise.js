const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;


axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/7068db56652c9f39e4d6055bf84a62ec/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((weatherData) => {
    console.log(weatherData);
    var temp = weatherData.data.currently.temperature;
    console.log(temp);
}).catch((error) => {
    if(error.code === 'ENOTFOUND') {
        console.log('unable to connect');
    }else {
        console.log(error.message);
    }
});