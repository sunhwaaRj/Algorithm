function solution(arr, queries) {
  const swap = ([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }; // 구조분해할당
  
  queries.forEach(swap);
  return arr;
}