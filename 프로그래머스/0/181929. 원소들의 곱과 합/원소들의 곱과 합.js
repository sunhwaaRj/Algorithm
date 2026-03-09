function solution(num_list) {
  var a = 1;
  var b = 0;
  for (var i = 0; i < num_list.length; i++) {
    a *= num_list[i];
    b += num_list[i];
  }
  
  if (a < b ** 2) return 1;
  else return 0;
}