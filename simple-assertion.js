/**
 * A Condition (Pre|Post) error
 * @param location
 * @constructor
 */
function ConditionError(location) {
  this.message = `${location} failed`;
}

/**
 * Will evaluate an array of Booleans for the existence of a false
 * @param assertions
 * @param location
 */
function runAssertions(assertions, location){
    if(assertions.indexOf(false) > -1) {
      console.error('error:', location);
      throw new ConditionError(location);
    }
}

/**
 * Indicates a precondition
 * @param assertions
 */
export function pre(...assertions) {
  runAssertions(assertions, 'Precondition');
}

/**
 * Indicates a post condition
 * @param assertions
 */
export function post(...assertions) {
  runAssertions(assertions, 'Postcondition');
}
