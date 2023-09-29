export default function iterateThroughObject(reportWithIterator) {
  const arr = [];

  for (const item of reportWithIterator) {
    arr.push(item);
  }

  return arr.join(' | ');
}
