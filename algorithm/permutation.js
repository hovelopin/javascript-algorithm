const getPermutations = (arr , selectedNumber) => {
  const results = [];

  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.
  if(selectedNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed , index , origin) => {
    const rest = [...origin.slice(0 , index), ...origin.slice(index + 1)];
    console.log('origin' , origin);
    console.log('rest' , rest);
    console.log('fixed' , fixed);
    console.log('index' , index);
    console.log('selectedNumber' , selectedNumber);
    const permutations = getPermutations(rest , selectedNumber - 1);
    console.log('여기는 언제 지나감?');
    console.log('permutations' , permutations);
    const attached = permutations.map((el) => [fixed , ...el]);
    console.log('attached' , attached);
    results.push(...attached);
    console.log('results' , results);
  })

  console.log('한번 순회 끝났어요!');

  return results;
}

console.log(getPermutations([6,10,2] , 3));