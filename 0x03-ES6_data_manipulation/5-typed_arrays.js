export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);

  try {
    int8View[position] = value;
  } catch (e) {
    return new Error('Position outside range');
  }

  return buffer;
}
