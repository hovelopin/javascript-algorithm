// 못푼문제
// 시작 (16시 10분) => 끝 ()
// 문자열.charCodeAt(index) => 문자열에서 index를 아스키코드로 변환해주는 함수
// String.fromCharCode(ASCII CODE) => 아스키코드를 문자로 변환해주는 함수
function solution(s, skip, index) {
    let answer = ""
    for(let apt of s) { 
        let aptCode = apt.charCodeAt() // 현재 알파벳의 코드 번호
        let i = index
        
        while (i > 0) {
            aptCode = aptCode === 122 ? 97 : aptCode + 1 // z인 경우만 a로 변경
            if (!skip.includes(String.fromCharCode(aptCode))) {
                i -= 1
            }
        }
        answer += String.fromCharCode(aptCode) // 코드 -> 알파벳
    }
    return answer;
}

console.log("정답 : ", solution("aukks" ,"wbqd" , 5));

