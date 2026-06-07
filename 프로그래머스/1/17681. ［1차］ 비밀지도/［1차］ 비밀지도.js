function solution(n, arr1, arr2) {
  var answer = [];
  var tmp = "";
  for (var i = 0; i < n; i++) {
    tmp = (arr1[i] | arr2[i]).toString(2);
    answer.push(
      [...tmp]
        .map((i) => (i == 1 ? (i = "#") : (i = " ")))
        .join("")
        .padStart(n, " ")
    );
  }
  return answer;
}