const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/error', (req, res) => {
    res.status(404).send({
        error: 'Page not found.'
    });
});

// app.get('/users', (req, res) => {
//     res.status(200).send({
//         users : ['Jade', 'Page', 'Sam']
//     });
// })

app.get('/users', (req, res) => {
    res.send([{
        name: 'Shaon',
        age: 24
    }, {
        name: 'Juthi',
        age: 28
    }, {
        name: 'Hars',
        age: 29
    }]);
});

app.listen(3000);
module.exports.app = app;