function solution(n, arr1, arr2) {
  const answer = [];

  const secretMap1 = arr1.map((el) => el.toString(2));
  const secretMap2 = arr2.map((el) => el.toString(2));

  for (const item in secretMap1) {
    let l = n - secretMap1[item].length; // 길이
    // 부족한 만큼 앞에 0을 더 채운다.
    if (n > 0) secretMap1[item] = "0".repeat(l) + secretMap1[item];
  }

  for (const item in secretMap2) {
    let l = n - secretMap2[item].length; // 길이
    // 부족한 만큼 앞에 0을 더 채운다.
    if (n > 0) secretMap2[item] = "0".repeat(l) + secretMap2[item];
  }

  for (let i = 0; i < n; i++) {
    let ans = "";
    for (let j = 0; j < n; j++) {
      secretMap1[i][j] === "0" && secretMap2[i][j] === "0"
        ? (ans += " ")
        : (ans += "#");
    }
    answer.push(ans);
  }

  return answer;
}

console.log("정답 : ", solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
