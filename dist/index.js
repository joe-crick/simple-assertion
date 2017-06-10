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
  if (assertions.indexOf(false) > -1) {
    throw new ConditionError(location);
  }
}

/**
 * Indicates a precondition
 * @param assertions
 */
function pre(assertions) {
  runAssertions(assertions, 'Precondition');
}

/**
 * Indicates a post condition
 * @param assertions
 */
function post(assertions) {
  runAssertions(assertions, 'Postcondition');
}