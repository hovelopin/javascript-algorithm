function solution(arr) {
  return arr.filter((el, index) => el !== arr[index + 1]);
}

console.log("정답 : ", solution([1, 1, 3, 3, 0, 1, 1]));
