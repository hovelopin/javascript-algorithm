function solution(s, n) {
  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );

  return alphabet;
}

console.log("정답 : ", solution("AB", 1));
