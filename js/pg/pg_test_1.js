// forEach를 돌렸을때 break문이 먹히지 않았음 => forEach를 종료시키려면 some, every , throw 에러를 발생시켜 종료시켜야한다.

const solution = (inputs) => {
  const temp = [];
  const ans = [];
  let cnt = 1;

  // inputs를 전체적으로 돈다.
  for (const input of inputs) {
    // input이 cnt보다 크면 temp에 cnt를 넣고 값을 증가시킨다.
    while (cnt <= input) {
      temp.push(cnt++);
    }

    // temp의 마지막 원소를 꺼내서 input이랑 비교한다.
    const popItem = temp.pop();

    // 같으면 input을 ans에 넣는다.
    // 다르면 비교해본다.
    if (input === popItem) {
      ans.push(input);
    } else {
      break;
      // if (popItem !== input) {
      //   break;
      // }
      // ans.push(popItem);
    }
  }

  return ans;
};

console.log(solution([4, 3, 1, 2, 5]).length); // 5
