// 시작 (21시 45분) => 끝 (22시 20분) => 정확성 35점
// 시작 (22시 20분) => 끝 (22시 25분) => 정확성 55점
// 끝 (22시 30분) => 정확성 95점
// 파기해야 할 개인정보의 번호를 오름차순으로 정렬
function solution(today, terms, privacies) {
  const termTable = {};
  const results = [];

  terms.forEach((term) => {
    const [key , value] = term.split(" ");
    termTable[key] = value;
  });

  privacies.forEach((privacy , idx) => {
    const [date , termKey] = privacy.split(" ");
    const [YYYY , MM , DD] = date.split(".");

    // month만 계산해서 더한다.
    const calcMM = Number(MM)+Number(termTable[termKey]);

    let quotient = 0;
    let divider = 0;

    // month를 기준으로 
    quotient = calcMM > 12 ? parseInt(calcMM / 12) : 0;

    if(calcMM > 12){
      if(calcMM % 12 === 0){
        divider = 1;
      }else{
        divider = calcMM % 12;
      }
    }else {
      divider = calcMM
    }
    // const divider = calcMM > 12 ? calcMM % 12 : calcMM;

    console.log('divider' , divider);

    const expireYYYY = Number(YYYY) + quotient;
    const expireMM = divider < 10 ? '0'+divider : divider;

    const expire = [expireYYYY , expireMM , DD];

    console.log('expire' , expire.join("."));

    if(today >= expire.join(".")){
      results.push(idx + 1);
    }
  })

  return results;
}

console.log("정답 : ", solution("2020.01.01" , ["A 12"], ["2019.12.01 A"]));
