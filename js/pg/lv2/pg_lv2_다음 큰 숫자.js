// 시작 (18:00) => 끝 (18:13) => 13분

const transBinaryOneCount = (num) => {
  return num.toString(2).split("").reduce((acc , cur) => {
      if(cur === '1'){
        return acc + 1;
      }
      return acc;
    },0);
}

function solution(n) {
    const binaryOneCount = transBinaryOneCount(n);

    let nextBiggerNum = n + 1;

    while (true) {

      if(binaryOneCount === transBinaryOneCount(nextBiggerNum)){
        return nextBiggerNum;
      }

      nextBiggerNum += 1;
    }
}

console.log("정답 : ", solution(78));
