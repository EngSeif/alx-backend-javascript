export default function getStudentIdsSum(set, array) {
  let exist = false;
  const setArr = Array.from(set);
  for (const element of array) {
    exist = setArr.includes(element);
  }
  return exist;
}
