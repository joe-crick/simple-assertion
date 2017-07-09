'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pre = pre;
exports.post = post;
/**
 * A Condition (Pre|Post) error
 * @param location
 * @constructor
 */
function ConditionError(location) {
  this.message = location + ' failed';
}

/**
 * Will evaluate an array of Booleans for the existence of a false
 * @param assertions
 * @param location
 */
function runAssertions(assertions, location) {
  if(assertions.indexOf(false) > -1) {
      try { throw new Error()} catch (error) {
        console.error('error:', location, error);
        throw new ConditionError(location)
      }
  }
}

/**
 * Indicates a precondition
 * @param assertions
 */
function pre() {
  for (var _len = arguments.length, assertions = Array(_len), _key = 0; _key < _len; _key++) {
    assertions[_key] = arguments[_key];
  }

  runAssertions(assertions, 'Precondition');
}

/**
 * Indicates a post condition
 * @param assertions
 */
function post() {
  for (var _len2 = arguments.length, assertions = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    assertions[_key2] = arguments[_key2];
  }

  runAssertions(assertions, 'Postcondition');
}
