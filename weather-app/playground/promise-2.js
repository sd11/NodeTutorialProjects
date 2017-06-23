const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect');
            }
            else if(body.status === 'ZERO_RESULTS') {
                reject('Unable to find address');
            }
            else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    longitude: body.results[0].geometry.location.lng,
                    latitude: body.results[0].geometry.location.lat
                });
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
     console.log(JSON.stringify(location, undefined, 2));
}, (errMsg) => {
    console.log(errMsg);
});