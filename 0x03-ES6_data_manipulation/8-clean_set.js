export default function cleanSet(set, startString) {
  const setArr = Array.from(set);
  const newArr = [];
  if (startString.length === 0) {
    return '';
  }
  for (const char of setArr) {
    if (char.startsWith(startString)) {
      newArr.push(char.slice(startString.length));
    }
  }
  return newArr.join('-');
}
