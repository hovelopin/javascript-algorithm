function solution(s) {
  const alphabet = s.toLowerCase().split("");
  let sCnt = 0;
  let pCnt = 0;

  alphabet.forEach((alpha) => {
    if (alpha === "y") {
      sCnt++;
    } else if (alpha === "p") {
      pCnt += 1;
    }
  });

  if (sCnt === pCnt || (sCnt === 0 && pCnt === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log("정답 : ", solution("pPoooyY"));
