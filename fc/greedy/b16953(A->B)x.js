// 시작 (20시 50분) => 끝 ()
// 접근 방법은 비슷했는데 풀이 방법이 틀림
const inputs = require("fs").readFileSync("./dev/stdin").toString().trim().split(" ").map(el => +el);

const solution = (inputs) => {
  let result = 0;
  let [a, b] = inputs;
  
  // 마지막 숫자가 1이면 1을빼고 1이 아니면 2를 나눈 다음에 a값과 비교한다. 
  while (a!==b){
    if(a>b){
      result = -1;
      break;
    }

    // 마지막 숫자가 1이면 1을 뺀다.
    if(b.toString().split("").at(-1) === '1'){
      b = b.toString().split("").slice(0 , -1).join("");
    }else {
      // 안나눠질떄는 -1을 넣고 탈출한다.
      if(b%2 !== 0){
        result = -1;
        break;
      }
      b = Number(b)/2;
    }

    result++;
  }

  return result === -1 ? -1 : ++result;
};

console.log(solution(inputs));
