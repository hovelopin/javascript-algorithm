function solution(d, budget) {
  const priceArr = d.sort((a, b) => a - b);
  let cnt = 0;
  let res = 0;

  for (const price of priceArr) {
    res += price;
    if (res <= budget) cnt++;
    else break;
  }

  return cnt;
}

console.log("정답 : ", solution([2, 2, 3, 3], 10));
