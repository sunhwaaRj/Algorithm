function solution(numbers, target) {
  let answer = 0;
  const stack = [[0, 0]]; // 시작

  while (stack.length) {
    const [idx, sum] = stack.pop();  // 상태 하나 꺼냄

    if (idx === numbers.length) {
      // 끝까지 왔을 때 처리
      if (sum === target) answer++;     
      continue;
    }

    // 더하는 상태 push
    stack.push([idx+1, sum+numbers[idx]]);
    
    // 빼는 상태 push
    stack.push([idx+1, sum-numbers[idx]]);
  }

  return answer;
}