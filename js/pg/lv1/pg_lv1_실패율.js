function solution(N, stages) {
  const count = Array(N + 1).fill(0);

  const failureRates = [];

  for (const stage of stages) {
    if (stage > N) {
      continue;
    }
    count[stage]++;
  }

  console.log('count',count);
  
  let peopleCnt = stages.length;
  for (let i = 1; i <= N; i++) {
    if (peopleCnt === 0) {
      failureRates.push({ stage: i, rate: 0 });
    } else {
      failureRates.push({ stage: i, rate: count[i] / peopleCnt });
      peopleCnt -= count[i];
    }
  }

  failureRates.sort((a, b) => b.rate - a.rate);
  console.log('failureRates',failureRates);

  return failureRates.map((data) => data.stage);
}

console.log("정답 : ", solution(5 ,[2, 1, 2, 6, 2, 4, 3, 3] ));