const day = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
};

function solution(a, b) {
  const res = new Date(`2016-0${a}-0${b}`).getDay();
  return day[res];
}

console.log("정답 : ", solution(5, 24));
