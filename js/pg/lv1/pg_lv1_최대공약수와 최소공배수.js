// n1 > n2보다 큼
function gcdFunc(n1, n2) {
  if (n2 === 0) return n1;
  return gcdFunc(n2, n1 % n2);
}

// 유클리드 호제법을 이용한 풀이!
function solution(n, m) {
  const gcd = n >= m ? gcdFunc(n, m) : gcdFunc(m, n);
  const lcm = (n, m) => (n * m) / gcd;

  return [gcd, lcm(n, m)];
}

console.log("정답 : ", solution(3, 12));

// 틀린 문제라 다시 보면 좋을 것 같다!
