function solution(number, limit, power) {
  var answer = 0;
  var arr = [];
  for (var i = 1; i <= number; i++) {
    // i 의 약수의 개수 구하기
    var count = 0;
    for (var j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        // 나누어 떨어질 때
        if (j * j == i) count++;
        else count += 2;
      }
    }
    arr.push(count);
  }
  // arr 순회하면서 limit 값과 크기 비교
  return arr.reduce((a, c) => (c <= limit ? a + c : a + power));
}