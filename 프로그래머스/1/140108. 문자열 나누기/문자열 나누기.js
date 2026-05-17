function solution(s) {
  var answer = 0;
  var arr = [...s];
  var x = arr[0];
  var isX = 0,
    notX = 0;

  for (var i = 0; i < arr.length; i++) {
    if (s[i] === x) isX++;
    else notX++;

    if (isX == notX) {
      answer++;
      isX = 0;
      notX = 0;
      x = s[i + 1];
    }
  }

  if (isX !== notX) answer++;

  return answer;
}