function solution(my_string, s, e) {
  var answer = "";
  answer += my_string.slice(0, s);

  var tmp = my_string.slice(s, e + 1);
  for (var i = tmp.length; i >= 0; i--) {
    answer += tmp.slice(i, i + 1);
  }

  answer += my_string.slice(e + 1);

  return answer;
}