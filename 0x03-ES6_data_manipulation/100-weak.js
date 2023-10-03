export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint);
  if (count === undefined) return weakMap.set(endpoint, 1);
  if (count >= 5) throw new Error('Endpoint load is high');

  return weakMap.set(endpoint, count + 1);
}
