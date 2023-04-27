function solution(absolutes, signs) {
  let sum = 0;
  signs.map((i, v) => {
    if (i === true) return (sum += +absolutes[v]);
    return (sum += -absolutes[v]);
  });

  return sum;
}

console.log("정답 : ", solution([4, 7, 12], [true, false, true]));
