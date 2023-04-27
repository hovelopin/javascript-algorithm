function solution(s) {
  const wordLength = s.length;
  return wordLength % 2 === 1
    ? s[parseInt(wordLength / 2)]
    : s[wordLength / 2 - 1] + s[wordLength / 2];
}

console.log("정답 : ", solution("qwer"));
