export default function cleanSet(set, startString) {
  const finalArr = [];
  set.forEach((item) => {
    if (item.startsWith(startString) && (startString !== '')) {
      const newString = item.split(startString).join('');
      finalArr.push(newString);
    }
  });

  return finalArr.join('-');
}
