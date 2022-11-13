// Z는 90 z는 122까지이다.

function solution(s, n) {
  const alphabet = [...s];
  const result = alphabet
    .map((el) => {
      if (el === " ") {
        return el;
      }
      const temp = el.charCodeAt(0);
      return el.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(temp + n - 26)
        : String.fromCharCode(temp + n);
    })
    .join("");
  return result;
}

console.log("정답 : ", solution("a B z", 4));
