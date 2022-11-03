function solution(s) {
  for (const item of s) {
    if (!Number.isInteger(+item)) return false;
  }
  return (s.length === 4 || s.length === 6) && true;
}

console.log("정답 : ", solution("1234"));
