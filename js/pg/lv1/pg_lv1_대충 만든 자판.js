function solution(keymap, targets) {
  const result = [];
  
  // targets 길이만큼 접근하는 반복문
  for(let i = 0; i < targets.length ;i++){
    // targets요소 하나하나에 접근하는 반복문
    let count = 0;

    for(let j = 0; j < targets[i].length ;j++){
      let minValueList = [];

      for(let k = 0 ; k < keymap.length;k++){
        const index = [...keymap[k]].findIndex((el) => el === targets[i][j]) + 1;
        minValueList.push(index);
      }

      const removeZero = minValueList.filter((el) => el !== 0);

      const removeZeroLength = removeZero.length;

      if(removeZeroLength === 0){
        count = -1
        break;
      }

      if(removeZeroLength !== 0){
        count += Math.min(...removeZero);
      }
    }

    result.push(count);

  }

  return result;
}

console.log("정답 : ", solution(["AA"], ["B"]));
