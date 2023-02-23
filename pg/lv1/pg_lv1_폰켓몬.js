function solution(nums) {
  const pickNum = parseInt(nums.length / 2);
  const set = new Set(nums);

  // 몇개를 고를지 정하는 pickNum과 배열에서 중복되는 원소들을 제거한 set의 길이를 비교해서
  // 고를게 많으면 set.size 아니면 반대
  return set.size < pickNum ? set.size : pickNum;
}

console.log("정답 : ", solution([3, 1, 2, 3]));
