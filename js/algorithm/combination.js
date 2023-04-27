// 조합 구하기!
const combination = (arr, selctNumber) => {
  const results = [];

  // n개중에서 1개를 선택하는 경우 , 모든 배열의 원소 return
  if (selctNumber === 1) return arr.map((el) => [el]);

  // fixed :  arr 내부의 배열 원소 , idx : index , origin : 현재 arr 배열
  arr.forEach((fixed, idx, origin) => {
    const restedArr = origin.slice(idx + 1);
    console.log(
      "fixed",
      fixed,
      "index",
      idx,
      "arr",
      arr,
      "restedArr",
      restedArr
    );
    const combinations = combination(restedArr, selctNumber - 1);

    const attached = combinations.map((el) => [fixed, ...el]);
    console.log("attached", attached);
    results.push(...attached);
    console.log("results", results);
  });

  return results;
};

console.log(combination([1, 2, 3, 4], 3));
