function solution(numbers) {
  const arr = numbers.split('').map(Number);
  const visited = Array(arr.length).fill(false);
  const set = new Set();

  function dfs(cur) {                  // cur: 지금까지 만든 수
	  for (let i = 0; i < arr.length; i++) {
	    if (visited[i]) continue;        // 이미 쓴 종이는 건너뜀
	
	    visited[i] = true;               // 사용 표시
	    const next = cur * 10 + arr[i]; // 새 수 만들기
	    // 만든 수를 set에 넣는다 (끝까지 가지 않아도 매 단계마다 넣음)
	    set.add(next);
	    dfs(next);
	    visited[i] = false;              // 사용 표시 해제 (다른 선택지를 위해)
	  }
	}

  function isPrime(num) {
    // 0, 1은 false
    if (num <2 ) return false;
    for(var i=2;i*i<=num;i++){
	    if(num % i === 0 ) return false; // 나누어 떨어지면
    }
    return true;
  }

  dfs(0);
  // set에서 소수인 것만 세어서 반환
  return Array.from(set).map((v) => isPrime(v)).filter((b) => b).length;
}