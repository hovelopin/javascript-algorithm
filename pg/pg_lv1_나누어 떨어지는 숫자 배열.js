function solution(arr, divisor) {
  const answer = [];
  for (const items of arr) {
    if (items % divisor === 0) answer.push(items);
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log("정답 : ", solution(n));
