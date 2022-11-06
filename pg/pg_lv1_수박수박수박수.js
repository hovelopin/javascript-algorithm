function solution(n) {
  return n % 2 === 0
    ? "수박".repeat(n / 2)
    : "수박".repeat(parseInt(n / 2)) + "수";
}

console.log("정답 : ", solution(4));
