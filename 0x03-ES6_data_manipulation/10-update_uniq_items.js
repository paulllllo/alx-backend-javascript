export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) return new Error('Cannot process');

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
