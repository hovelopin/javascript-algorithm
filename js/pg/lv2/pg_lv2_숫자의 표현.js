// 17시 40분 ( 시작 ) => 17시 55분 ( 끝 )

function solution(n) {
  let answer = 0;
  let half = parseInt(n/2) + 1;

  for(let i = 1 ;i <= n; i++){
    let count = i;

    for(let j = i+1; j <= half; j++){
      count += j;

      if(count > n){
        break;
      }

      if(count === n){
        answer ++;
        break;
      }
    }
  }

  return answer + 1;
}

console.log("정답 : ", solution(15));
