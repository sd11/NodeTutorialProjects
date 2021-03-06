const request = require('request');

var geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect');
        }
        else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find address');
        }
        else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                longitude: body.results[0].geometry.location.lng,
                latitude: body.results[0].geometry.location.lat
            });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;