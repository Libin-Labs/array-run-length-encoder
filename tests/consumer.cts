import * as api from '@lp-labs/array-run-length-encoder';
import { encodeRuns } from '@lp-labs/array-run-length-encoder';
console.log(encodeRuns([1, 1, 2, 2, 2]));
// @ts-expect-error invalid argument must be rejected by declarations
api.encodeRuns('items');
