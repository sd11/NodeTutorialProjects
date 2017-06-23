var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('arguments must be numbers');
            }
        }, 1500);
    });
};

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Hey. It worked!');
//         reject('Sorry. Try again.')
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMsg) => {
//     console.log('Error: ', errorMsg);
// });

asyncAdd(4, 7).then((result) => {
    console.log('Success: ', result);
    return asyncAdd(result, '33');
}).then((res) => {
    console.log(res);
}).catch((er) => {
    console.log(er);
});