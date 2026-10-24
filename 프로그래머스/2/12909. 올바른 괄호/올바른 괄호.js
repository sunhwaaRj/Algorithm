function solution(s) {
  var stack = 0;
  for (var char of s) {
    // 삼항연산
    char === `(` ? stack++ : stack--;
    if (stack < 0) return false;
  }
  // stack 이 0이면 true 아니면 false
  return !stack;
}