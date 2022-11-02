function solution(s) {
  const word = s.split("").sort().reverse().join("");
  return word;
}

console.log("정답 : ", solution("Zbcdefg"));
