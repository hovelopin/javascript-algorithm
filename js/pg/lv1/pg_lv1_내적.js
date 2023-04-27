function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

console.log("정답 : ", solution([1, 2, 3, 4], [-3, -1, 0, 2]));
