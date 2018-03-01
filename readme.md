# Simple Assertion

[![Greenkeeper badge](https://badges.greenkeeper.io/joe-crick/simple-assertion.svg)](https://greenkeeper.io/)
I've wanted to do DbC in JS for a while. There are libs out there, but they're out of date and do too much. 
All I really needed was to have the ability to test the truth value of propositions. Hence, Simple Assertion.

Using Simple Assertion, you can define your `pre` and `post` conditions as function arguments, like so:

```js

pre(typeof myVar === 'number', myVar > 0 && myVar < 100, myVar %2 === 0)

const someOtherVar = myVar + 1;

post(someOtherVar === myVar + 1)
```

Simple Assertion evaluates the truth values of arguments it receives. If it encounters a false value
it will throw an error, and create an error object indicating what condition failed (pre | post).

_finis_.
