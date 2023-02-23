function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const results = [0, 0, 0];
  const solve = [];
  // 1번 수포자 , 2번 수포자 , 3번 수포자
  answers.forEach((el, idx) => el === one[idx % 5] && results[0]++);
  answers.forEach((el, idx) => el === two[idx % 8] && results[1]++);
  answers.forEach((el, idx) => el === three[idx % 10] && results[2]++);

  const max = Math.max(...results);

  results.forEach((result, idx) => max === result && solve.push(idx + 1));

  return solve;
}

console.log("정답 : ", solution([1, 2, 3, 4, 5]));
