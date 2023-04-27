// 완전 탐색
function solution(number) {
  let cnt = 0;

  for (let i = 0; i <= number.length - 3; i++) {
    for (let j = i + 1; j <= number.length - 2; j++) {
      for (let k = j + 1; k <= number.length - 1; k++) {
        if (number[i] + number[j] + number[k] === 0) cnt++;
      }
    }
  }

  return cnt;
}

console.log("정답 : ", solution([-2, 3, 0, 2, -5]));
