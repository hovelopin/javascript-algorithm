function solution(arr) {
  const answer = [];

  for (const idx in arr) {
    if (idx === "0") {
      answer.push(arr[idx]);
    } else {
      if (arr[+idx - 1] === arr[+idx]) {
        continue;
      } else {
        answer.push(arr[idx]);
      }
    }
  }
  return answer;
}

console.log("정답 : ", solution([4, 4, 4, 3, 3]));
