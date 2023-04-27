function solution(s) {
  const splitString = s.split(" ");
  const answer = [];

  for (const words of splitString) {
    const splitWords = words.split("");
    for (const idx in splitWords) {
      if (idx % 2 === 0) splitWords[idx] = splitWords[idx].toUpperCase();
      else splitWords[idx] = splitWords[idx].toLowerCase();
    }
    const result = splitWords.join("");
    answer.push(result);
  }
  return answer.join(" ");
}

console.log("정답 : ", solution("try hello world"));
