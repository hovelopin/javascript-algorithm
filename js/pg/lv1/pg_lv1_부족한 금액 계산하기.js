function solution(price, money, count) {
  let priceValue = 0;
  for (let i = 1; i <= count; i++) {
    priceValue += price * i;
  }
  return money - priceValue > 0 ? 0 : priceValue - money;
}
console.log("정답 : ", solution(3, 20, 4));
