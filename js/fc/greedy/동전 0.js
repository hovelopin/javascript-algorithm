// 시작 (00:00) => 끝 (00:16) => 16분 소요

const [sys ,...inputs] = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = (inputs) => {
  let [n , k] = sys.split(" ").map(el => +el);

  // 정수로 변환하고 순서를 역으로 바꾼다.
  const mappedInputList = inputs.map(el => +el).reverse();

  const result = mappedInputList.reduce((acc , cur) => {
    if(k / cur >= 1){
      acc += parseInt(k/cur);
      k %= cur;
      return acc;
    }
    return acc;
  },0)
  
  return result;
  
};

console.log(solution(inputs));
