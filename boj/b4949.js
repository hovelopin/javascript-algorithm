// 22시 45분 ( 시작 ) => 23시 15분 ( 끝 )
const inputs = require("fs").readFileSync("./dev/stdin").toString().split("\n");

const solution = (inputs) => {
  const res = [];

  for (let i = 0; i < inputs.length; ++i) {
    // 만일 길이가 1이고 첫번째 원소가 .이면 res를 반환하고 함수 종료!
    if (inputs[i].length === 1 && inputs[i][0] === ".") {
      return res;
    }
    // temp라는 배열을 만들고 flag값을 true로 설정한다.
    const temp = [];
    flag = true;

    // 반복문을 돌면서 하나하나씩 접근하고 조건에 맞게 처리해준다.
    for (let j = 0; j < inputs[i].length; ++j) {
      if (inputs[i][j] === "(" || inputs[i][j] === "[") {
        temp.push(inputs[i][j]);
      } else if (inputs[i][j] === ")") {
        if (temp.at(-1) === "(") {
          temp.pop();
        } else {
          flag = false;
          break;
        }
      } else if (inputs[i][j] === "]") {
        if (temp.at(-1) === "[") {
          temp.pop();
        } else {
          flag = false;
          break;
        }
      } else if (inputs[i][j] === ".") {
        break;
      }
    }

    if (temp.length) {
      flag = false;
    }

    flag ? res.push("yes") : res.push("no");
  }
};

console.log(solution(inputs).join("\n"));
