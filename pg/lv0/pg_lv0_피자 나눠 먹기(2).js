// 시작 () => 끝 ()
function solution(n) {
    let cnt = 1;
    let answer = 0;

    while (true) {
      if(n * cnt % 6 === 0) {
        answer = n * cnt / 6
        break;
      }
      cnt ++;
    }

    return answer;
}

console.log("정답 : ", solution(6));
