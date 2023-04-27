// 시작 (21시 25분) => 끝 ()
// 횟수 , 제거된 0의 개수 구하기

// 0을 제거하고 제거된 0의 개수 구하는 함수
const removeZero = (str) => {
  let removeCount = 0;
  const removeZeroList = [...str].filter(str => {
    if(str === '0'){
      removeCount++;
      return;
    }
    return str === '1';
  });
  
  return [removeZeroList , removeCount];
};

const decimalToBinary = (num) => num.toString(2);


function solution(s) {
  let answer = 0;
  let zeroCnt = 0;
  // s가 1이면 멈춘다.
  while(s !== "1" ){
    const [removeZeroList , removeCount] = removeZero(s);
    // 숫자랑 2진법 구하기
    zeroCnt += removeCount;
    const binary = decimalToBinary(removeZeroList.length);
    answer ++;
    s = parseInt(binary).toString();
  }

  return [answer , zeroCnt];
  
}

console.log("정답 : ", solution("110010101001"));
