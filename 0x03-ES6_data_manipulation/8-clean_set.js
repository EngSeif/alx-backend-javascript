export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0 || !(set instanceof Set)) {
    return '';
  }

  const newArr = [];

  for (const char of set.values()) {
    if (typeof char === 'string' && char.startsWith(startString)) {
      newArr.push(char.slice(startString.length));
    }
  }

  return newArr.join('-');
}
