function solution(strings, n) {
  const arr = strings.sort((next, prev) => {
    if (next[n] > prev[n]) return 1;
    else if (next[n] < prev[n]) return -1;
    // 주어진 문자가 같을 경우 문자열을 비교해 더 큰 문자열을 뒤로 보낸다.
    else if (next[n] === prev[n]) {
      if (next[n] > prev[n]) return 1;
      if (next[n] < prev[n]) return -1;
      return 0;
    }
  });
  return arr;
}

console.log("정답 : ", solution(["sun", "bed", "car"], 1));
