const operations = {
  1: (ans) => ans + "w",
  "-1": (ans) => ans + "s",
  10: (ans) => ans + "d",
  "-10": (ans) => ans + "a",
};

function solution(numLog) {
  return numLog
  .slice(0, -1) // 마지막 요소 제거
  .reduce((prev, cur, i) => operations[numLog[i+1] - cur](prev), "");
}
