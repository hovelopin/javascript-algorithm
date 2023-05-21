// 0시 30분 (시작) -> 0시 35분 (끝)
function solution(strings, n) {
    // n번째 순서로 정렬을 하고 같을때만 사전순으로 앞선놈이 앞에 서있는게 기준
    strings.sort((prev , next) => {
        if(prev[n] > next[n]){
            return 1;
        }
        if(prev[n] < next[n]){
            return -1;
        }

        return prev > next ? 1 : -1;
    })

    return strings;
}

console.log("정답 : ", solution(["abce", "abcd", "cdx"], 2));
