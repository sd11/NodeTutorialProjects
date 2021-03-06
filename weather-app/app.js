const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

if(argv && argv.address) {
    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(JSON.stringify(results, undefined, 2));
            const lat = results.latitude;
            const lng = results.longitude;
            weather.getWeather(lat, lng, (errorMessage, weatherResults) => {
                if (errorMessage) {
                    console.log(errorMessage);
                } else {
                    console.log(JSON.stringify(weatherResults, undefined, 2));
                }
            });
        }
    });
}