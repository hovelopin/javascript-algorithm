// 시작 (21시) => 끝 (21시 15분)
const inputs = require("fs").readFileSync("./dev/stdin").toString().trim();

const solution = (inputs) => {
  let result = 0;

  const removeMinus = inputs.split("-");
  const mappedInputs = removeMinus.map(el => {
    if(el.includes("+")){
      const removePlus = el.split("+").map(el => +el).reduce((acc , cur) => acc + cur , 0);
      return removePlus;
    }
    return +el;
  })

  mappedInputs.forEach((input, idx) => {
    if(idx === 0 ) {
      result+= input;
      return;
    }
    result -= input;
  })

  return result;
};

console.log(solution(inputs));
