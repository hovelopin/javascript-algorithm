// num의 약수가 짝수이면 true 홀수이면 false
function checkDivisor(num) {
  let count = 0;
  let divisor = 1;
  while (divisor <= num) {
    if (num % divisor === 0) count++;
    divisor++;
  }
  return count % 2 === 0 ? true : false;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (checkDivisor(i) === true) answer += i;
    else answer -= i;
  }
  return answer;
}

console.log("정답 : ", solution(13, 17));

// 이 문제의 제대로 된 풀이는 제곱근이 정수이면 => 약수의 갯수가 홀수이다 , 즉 : Math.sqrt(i) 가 정수이면 => 갯수가 홀수
