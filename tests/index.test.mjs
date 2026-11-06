import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('encodes runs', () => {
  assert.deepEqual(api.encodeRuns([1, 1, 2, 2, 2]), [
    { value: 1, count: 2 },
    { value: 2, count: 3 },
  ]);
});
test('handles empty input', () => {
  assert.deepEqual(api.encodeRuns([]), []);
});
test('keeps nonconsecutive duplicates separate', () => {
  assert.deepEqual(
    api.encodeRuns([1, 2, 1]).map((x) => x.count),
    [1, 1, 1],
  );
});
test('groups NaN with itself', () => {
  assert.equal(api.encodeRuns([NaN, NaN])[0]?.count, 2);
});
test('distinguishes signed zero', () => {
  assert.equal(api.encodeRuns([0, -0]).length, 2);
});
test('rejects non-array', () => {
  assert.throws(() => api.encodeRuns(1), TypeError);
});
