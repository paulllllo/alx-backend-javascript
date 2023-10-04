export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint);
  if (count === undefined) return weakMap.set(endpoint, 1);
  weakMap.set(endpoint, count + 1);
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}
