function solution(n) {
  const nArray = (n + "")
    .split("")
    .reverse()
    .map((i) => +i);
  return nArray;
}

console.log(solution(12345));
