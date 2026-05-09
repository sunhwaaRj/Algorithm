function solution(n) {
  var arr = new Array(n + 1).fill(true);
  arr[0] = arr[1] = false;

  for (var i = 2; i * i <= n; i++) {
    if (arr[i]) {
      // true 인 것만 찾아
      // i*i 부터 n 까지 i의 배수 false
      for (var j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.reduce((acc, cur, i) => {
    if (cur) acc.push(i);
    return acc;
  }, []).length;
}