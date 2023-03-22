// 시작 (22시 50분) => 끝 ()
function solution(n, m, section) {
  const paint = [];

  let endPoint = 0;
  let result = 0;

  section.forEach(s => {
    // paint가 s를 포함하고 있다면 이미 칠했으니까 넘어간다.
    if(paint.includes(s)){
      return;
    }

    // endPoint를 다시 계산해준다.
    endPoint = s + m - 1

    // S와 End를 paint에 넣는다.
    for(let i = s ; i <= endPoint; i++){
      paint.push(i);
    }

    // result를 1증가시킨다.
    result ++;
  })

  return result;
}

console.log("정답 : ", solution(4, 1, [1,2,3,4]));
