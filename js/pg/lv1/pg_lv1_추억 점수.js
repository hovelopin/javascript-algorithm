// 20시 5분 (시작) => 20시 13분 (끝)
function solution(names, yearning, photos) {
    let score={};
    const answers = [];

    // score에 값 넣어놓기
    names.forEach((name , idx) => {
      if(score.name === undefined){
        score[name] = yearning[idx];
      }
    })

    // 값 계산하기
    photos.forEach((photoList) => {
      let sum = 0;
      photoList.forEach((photo) => {
        // 없는 값들은 제외하기
        if(score[photo] !== undefined){
          sum += score[photo];
        }
      })

      answers.push(sum);
    })

    return answers;
    
}
console.log("정답 : ", solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3] , [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]));
