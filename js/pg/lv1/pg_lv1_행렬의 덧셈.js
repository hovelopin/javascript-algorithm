function solution(arr1, arr2) {
  const answer = Array.from(Array(arr1.length), () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

console.log("정답 : ", solution([[1], [2]], [[3], [4]]));

/**
 * function solution(arr1, arr2) {
    var answer = [[]];
    for (var i=0; i<arr1.length; i++){
        answer[i] =[];
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
    }
 * 
 * 
 */
