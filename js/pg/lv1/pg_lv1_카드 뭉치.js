// 시작 (23시 15분) => 끝 (23시 24분)
function solution(cards1, cards2, goalList) {
  let flag = true;

  goalList.forEach((goal) => {
    if(cards1[0] === goal){
      cards1.shift();
      return;
    }

    if(cards2[0] === goal){
      cards2.shift();
      return;
    }

    flag = false;
    return false;
  })

  return flag === true ? 'Yes' : 'No';
  
}

console.log("정답 : ", solution(["i", "drink", "water"]	,["want", "to"] , ["i", "want", "to", "drink", "water"]));
