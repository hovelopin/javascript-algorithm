function solution(n) {
  const tenToThree = n.toString(3).split("").reverse().join("");
  return parseInt(tenToThree, 3);
}
