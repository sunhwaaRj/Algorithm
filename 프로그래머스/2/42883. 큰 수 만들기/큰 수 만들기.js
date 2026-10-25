function solution(number, k) {
  var answer = "";
  const stack = [];
  for (const ch of number) {
    // stack 의 마지막 요소가 지금 나보다 작으면 그거 pop 하고 나를 넣기
    while (k > 0 && stack.length && stack[stack.length - 1] < ch) {
      stack.pop();
      k--;
    }
    stack.push(ch);
  }

  // k 가 남았다면 제일 뒤 k개 제거
  if (k > 0) return stack.join("").slice(0, stack.length - k);

  return stack.join("");
}