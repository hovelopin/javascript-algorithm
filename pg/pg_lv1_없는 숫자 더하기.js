function solution(numbers) {
  let answer = 0;
  const numArrSort = numbers.sort((a, b) => a - b);
  for (let i = 0; i < 10; i++) {
    if (numArrSort.indexOf(i) === -1) answer += i;
  }
  return answer;
}

console.log("정답 : ", solution([1, 2, 3, 4, 6, 7, 8, 0]));
