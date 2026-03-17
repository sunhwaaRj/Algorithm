function solution(arr) {
  var stk = [];
  var i = 0;
  while (i < arr.length) {
    if (stk.at(-1) >= arr[i]) stk.pop();
    else {
      stk.push(arr[i]);
      i++;
    }
  }
  return stk;
}