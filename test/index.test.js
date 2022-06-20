const {hello} = require('../src');
// const {hello, olleh} = require('../src');

const helloWorld = 'Hello World!';

describe('hello', function () {
  it('hello() to return "Hello World!"', function () {
    expect(hello()).to.equal(helloWorld);
  });

  it('hello("World") to return "Hello World!"', function () {
    expect(hello('World')).to.equal(helloWorld);
  });

  it('hello("John") to return "Hello John!"', function () {
    expect(hello('John')).to.equal('Hello John!');
  });

  it('hello(1) to throw type exception', function () {
    const thrower = () => hello(1);
    expect(thrower).to.throw(TypeError, 'Invalid argument type; expecting string');
  });
});

// // eslint-disable-next-line mocha/max-top-level-suites
// describe('olleh', function () {
//   it('olleh() to return "Hello World!" in base64', function () {
//     const dlrowOlleh = helloWorld.split('').reverse().join('');
//     expect(olleh()).to.equal(dlrowOlleh);
//   });
// });
