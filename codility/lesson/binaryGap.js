// 31분 걸리고 86% 맞췄다.

const decimalToBinary = (num) => {
    return num.toString(2);
}

function solution(N) {
    const binaryList = [...decimalToBinary(N)];

    let maxLength = 0;
    let oneCount = 0;

    for(let i = 0; i < binaryList.length ;i++){
        let count = 0;

        if(binaryList[i] === '1'){
            oneCount++;

            for(let j = i+1; j < binaryList.length; j++){
                if(binaryList[j] === '1'){
                    break;
                }
                count++;
            }
        }

        if(count > maxLength){
            maxLength = count;
        }
    }

    return oneCount < 2 ? 0 : maxLength;
}
