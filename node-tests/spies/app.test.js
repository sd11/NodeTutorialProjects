const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it('should call the spy correctly with', () => {
        var spy = expect.createSpy();
        spy('Shaon', 24);
        expect(spy).toHaveBeenCalledWith('Shaon', 24);
    });
    //spies test if a function is being called and has been passed the right arguments
    it('should call saveUser with user object', () => {
        var email = 'sd@example.com';
        var password = '123abc';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});