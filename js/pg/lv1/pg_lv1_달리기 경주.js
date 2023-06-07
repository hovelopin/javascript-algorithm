// 시작 (22시 55분) => 끝 (23시 5분) => 시간초과 4개
// 끝 (23시 28분)
function solution(players, callings) {
  const rankMap = new Map();

  players.forEach((player , idx) => {
    rankMap.set(player , idx);
  });
  
  callings.forEach((calling) => {
    const rank = rankMap.get(calling);
    // players의 순위를 바꿔준다.
    [players[rank - 1] , players[rank]] = [players[rank] , players[rank - 1]];
    // rankMap에서도 바꿔준다.
    rankMap.set(players[rank - 1] , rank - 1);
    rankMap.set(players[rank] , rank);
  })

  return players;
}

console.log("정답 : ", solution(["mumu", "soe", "poe", "kai", "mine"] , ["kai", "kai", "mine", "mine"]));
