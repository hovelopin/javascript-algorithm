// 시작 (13시 20분) => 끝 ()
function solution(babbling) {
    const canBabbingWords = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        for(let j = 0; j < canBabbingWords.length; j++){
            if(babbling[i].includes(canBabbingWords[j].repeat(2))){
                break;
            }
            
            babbling[i] = babbling[i].split(canBabbingWords[j]).join(" ");
        }
        
        if(babbling[i].split(" ").join("").length === 0){
            count += 1;
        }
    }
    
    return count;
}

console.log("정답 : ", solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
