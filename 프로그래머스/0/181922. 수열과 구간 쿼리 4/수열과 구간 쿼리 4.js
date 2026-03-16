function solution(arr, queries) {
  queries.map(([s, e, k]) => {
    for (var i = s; i <= e; i++) {
      if (i % k != 0) continue;
      arr[i] += 1;
    }
  });
  return arr;
}