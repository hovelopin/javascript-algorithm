// 조합 구하는 방법
const combination = (arr, selctNumber) => {
  const results = [];

  if (selctNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const restedArr = origin.slice(idx + 1);

    const combinations = combination(restedArr, selctNumber - 1);

    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const isPrime = (N) => {
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      return false;
    }
  }

  return true;
};

function solution(nums) {
  let cnt = 0;
  const combinations = combination(nums, 3);

  combinations.forEach((combination) => {
    const sumCombination = combination.reduce((acc, cur) => acc + cur, 0);
    isPrime(sumCombination) && cnt++;
  });

  return cnt;
}

console.log("정답 : ", solution([1, 2, 3, 4]));
