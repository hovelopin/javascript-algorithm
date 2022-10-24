function solution(n) {
  return Number.isInteger(Math.sqrt(n)) === true ? (Math.sqrt(n) + 1) ** 2 : -1;
}

console.log("정답 : ", solution(3));
