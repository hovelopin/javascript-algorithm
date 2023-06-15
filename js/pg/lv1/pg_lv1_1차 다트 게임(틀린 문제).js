// 시작 (23시 2분) => 끝 ()
// * => 해당 점수와 바로 전에 얻은 점수를 2배로 만든다. ( 첫번째에 나왔을때는 해당 점수만 2배 , 중첩 가능 4배 )
// # => 해당 점수 마이너스 ( 스타상과 중첩될 경우에는 아차상의 점수는 -2배 )

function solution(dartResult) {
    var answer = [];
    var temp = 0; // 숫자 담을 변수
    
    for(let i=0; i<dartResult.length; i++) {
        // 만약에 dartResult가 숫자라면
        if(0 <= dartResult[i] && dartResult[i] <= 9) {
            if(dartResult[i] == 1 && dartResult[i+1] == 0) {
                temp = 10;
                i++;
            // 10이 아닐 경우 그대로 temp에 넣어줌.
            } else { 
                temp = dartResult[i];
            }
        } else if(dartResult[i] === "S") { 
            answer.push(temp);
            
        } else if (dartResult[i] === "D") {
            answer.push(temp ** 2);
            
        } else if (dartResult[i] === "T") {
            answer.push(temp ** 3);
            
        } else if (dartResult[i] === "#") { 
            answer[answer.length-1] *= -1;
            
        } else if (dartResult[i] === "*") {
            answer[answer.length-1] *= 2;
            answer[answer.length-2] *= 2;
            
        }
    }
        
    return answer.reduce((acc , cur) => acc + Number(cur), 0);
}

console.log("정답 : ", solution("1S2D*3T"));
