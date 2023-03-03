// 시작 (23시 25분) => 끝 (23시 38분) => 완전 탐색 풀이 시간 초과 ( 테케 전부 통과 , 효율성 1개 실패 )
function solution(n) {
    let answer = 0;
    for(let i = 1 ; i<=n ; i++){
      let sum = i;  
      for(let j = i+1 ; j<=n; j++){
        sum += j;
        if(sum > n) {
          break;
        }
        if(sum === n){
          answer++;
          break;
        }
        
      }
    }
    return answer+1;
}

console.log("정답 : ", solution(15));
