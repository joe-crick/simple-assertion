import test from 'tape';
import {pre, post} from '../simple-assertion';

test('Pre', nest => {
  nest.test('does not throw an error for set of true', assert => {
    assert.doesNotThrow(() => pre(true, true, true), 'should not throw an error');
    assert.end();
  });
  nest.test('throws an error for set has false', assert => {
    assert.throws(() => pre(true, false, true), 'should throw an error');
    assert.end();
  });
});

test('Post', nest => {
  nest.test('does not throw an error for set of true', assert => {
    assert.doesNotThrow(() => post(true, true, true), 'should not throw an error');
    assert.end();
  });
  nest.test('throws an error for set has false', assert => {
    assert.throws(() => post(true, false, true), 'should throw an error');
    assert.end();
  });
});
