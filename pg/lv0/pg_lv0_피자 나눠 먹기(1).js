// 시작 (22시) => 끝 ()
function solution(n) {
    if(n <= 7){
      return 1;
    }
    
    return n % 7 === 0 ? parseInt(n/7) : parseInt(n/7) + 1
}
console.log("정답 : ", solution(15));
