function solution(seoul) {
  for (const idx in seoul) {
    if (seoul[idx] === "Kim") return `김서방은 ${idx}에 있다`;
  }
}

console.log("정답 : ", solution(["Jane", "Kim"]));
