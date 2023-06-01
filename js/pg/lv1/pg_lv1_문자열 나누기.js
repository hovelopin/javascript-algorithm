// 시작 (23시 35분) => 끝 (24시 5분)
function solution(str) {
  let isStandardPush = true;
  let result = 0;

  let standard = '';
  let diff = '';

  for(let i = 0 ; i < str.length; i++){
    if(isStandardPush){
      standard += str[i];
      isStandardPush = false;
      continue;
    }

    // standard[0] : 기준이 되는 문자
    if(standard[0] === str[i]){
      standard += str[i];
    }

    if(standard[0] !== str[i]){
      diff += str[i];
    }

    if(standard.length === diff.length){      
      result ++;
      isStandardPush = true;
      standard = '';
      diff = '';
    }
  }
  
  if(standard.length > 0){
    return result + 1
  }

  return result;
}

console.log("정답 : ", solution("abracadabra"));
