const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/7068db56652c9f39e4d6055bf84a62ec/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 400) {
            callback('Unable to fetch weather');
        }
        else if (response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;