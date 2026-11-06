export interface Run<T> {
  readonly value: T;
  readonly count: number;
}
export function encodeRuns<T>(items: readonly T[]): Run<T>[] {
  if (!Array.isArray(items)) throw new TypeError('Expected array');
  const out: Run<T>[] = [];
  for (const value of items) {
    const last = out.at(-1);
    if (last && Object.is(last.value, value))
      out[out.length - 1] = { value, count: last.count + 1 };
    else out.push({ value, count: 1 });
  }
  return out;
}
