//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text: 'Somthn to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     //JSON pretty print function. Undefined for filter and 2 for indentation.
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new document into users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Shaon',
    //     age: 24,
    //     location: 'Mct'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert users', err);
    //     }
    //     //JSON pretty print function. Undefined for filter and 2 for indentation.
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log((result.ops[0]._id).getTimestamp());
    // });
    db.close();
});

