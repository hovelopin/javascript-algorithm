function solution(array, commands) {
  const result = [];
  commands.forEach((el) => {
    const temp = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b);
    result.push(temp[el[2] - 1]);
  });

  return result;
}

console.log(
  "정답 : ",
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
