// 시작 (22:00) => 끝 (22:26)
function solution(wallpaper) {
    let minX = 9999;
    let minY = 9999;
    let maxX = 0;
    let maxY = 0;

    for(let i = 0; i < wallpaper.length ;i++){
      for(let j = 0; j < wallpaper[i].length ;j++){
        if(wallpaper[i][j] === '#'){
          if(i <= minY){
            minY = i;
          }
          if(i>= maxY){
            maxY = i;
          }

          if(j <= minX){
            minX = j;
          }
          if(j >= maxX){
            maxX = j;
          }
        }
      }
    }
  
    return [minY , minX , maxY+1 , maxX+1]
}

console.log("정답 : ", solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]));
