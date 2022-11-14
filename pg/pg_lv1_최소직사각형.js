function solution(sizes) {
  console.log(sizes);
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  const maxSize = [0, 0];

  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
}

console.log(
  "정답 : ",
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
