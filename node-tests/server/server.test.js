const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server Tests', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello world!')
                .end(done);
        });
    });
    describe('GET /error', () => {
        it('should return a page not found error', (done) => {
            request(app)
                .get('/error')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toEqual({error: 'Page not found.'});
                })
                .end(done);
        });
    });
    describe('GET /users', () => {
        it('should return an object with users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Shaon',
                        age: 24
                    })
                })
                .end(done);
        });
    });

});