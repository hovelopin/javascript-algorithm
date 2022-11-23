function solution(numbers) {
  const set = new Set([]);

  for (let i = 0; i <= numbers.length - 2; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  return [...set].sort((a, b) => a - b);
}

console.log("정답 : ", solution([2, 1, 3, 4, 1]));
