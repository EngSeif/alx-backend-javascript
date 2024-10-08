export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const newArr = [];

  for (const char of set) {
    if (char.startsWith(startString)) {
      newArr.push(char.slice(startString.length));
    }
  }

  return newArr.join('-');
}
