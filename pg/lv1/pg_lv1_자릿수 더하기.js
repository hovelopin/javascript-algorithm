function solution(n) {
  const num = n + "";
  const numArray = num.split("").map((i) => +i);
  let result = 0;

  numArray.forEach((i) => {
    result += i;
    return result;
  });

  return result;
}

console.log("자릿수 더하기", solution(123));
