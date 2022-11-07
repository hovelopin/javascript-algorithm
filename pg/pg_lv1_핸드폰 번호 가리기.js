// function solution(phone_number) {
//   const endPhoneArr = phone_number.split("").reverse().slice(4);
//   //   const newPhoneArr = endPhoneArr.splice(4).length;
//   //   return "*".repeat(newPhoneArr) + endPhoneArr.join("");
//   return endPhoneArr;
// }

function solution(phone_number) {
  const lengthDiff = phone_number.length - 4;
  const endPhoneNumArr = phone_number.slice(-4);
  const star = "*".repeat(lengthDiff);

  return star + endPhoneNumArr;
}

console.log("정답 : ", solution("01033334444"));
