const utils = require('./utils');
const expect = require('expect');

describe('Utils Tests', () => {

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toEqual(44, `Expected 44, but got ${res}`);
    expect(res).toBe(44).toBeA('number');
});
// done tells mocha that asyncAdd is an asynchronous function. Done is a callback that is called after sum has finished.
it('should async add 2 numbers', (done) => {
    utils.asyncAdd(4, 3, (sum)=> {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should async square a number', (done) => {
    utils.asyncSquare(4, (square)=> {
        expect(square).toBe(16).toBeA('number');
        done();
    });
});

it('should multiply numbers', () => {
    var res = utils.square(3);
    expect(res).toEqual(9, `Expected 9, but got ${res}`);
    expect(res).toBe(9).toBeA('number'); //chaining assertions
});

it('should expect some values', () => {
    expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
    expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
    expect([2, 3, 4]).toExclude(1);
    expect([2, 3, 4]).toInclude(2);
    expect({
        name: 'Andrew',
        age: 25
    }).toExclude({
        age: 23
    });
});

it('should verify first and last names', () => {
    var user = utils.setName({}, "Shatabdi Dey");
    expect(user.firstName).toBe("Shatabdi").toBeA('string');
    expect(user.lastName).toBe("Dey").toBeA('string');
});

it('should include first and last names', () => {
    var origUser = {location: 'Sydney', gender: 'F'};
    var user = utils.setName(origUser, "Shatabdi Dey");
    expect(user).toInclude({
        firstName: 'Shatabdi',
        lastName: 'Dey'
    }).toBe(origUser);
});

});