function solution(A,B){
  const sortedA = A.sort((a,b) => a-b);
  const sortedB = B.sort((a,b) => b-a);
  
  const sumArr = sortedA.reduce((acc , cur ,idx) => acc + cur * sortedB[idx],0);

  return sumArr;
}

console.log("정답 : ", solution([1, 4, 2] ,[5, 4, 4] ));
