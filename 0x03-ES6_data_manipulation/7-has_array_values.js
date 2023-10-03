export default function hasValuesFromArray(set, arr) {
  let con = true;

  arr.forEach((item) => {
    con = set.has(item) && con;
  });

  return con;
}
