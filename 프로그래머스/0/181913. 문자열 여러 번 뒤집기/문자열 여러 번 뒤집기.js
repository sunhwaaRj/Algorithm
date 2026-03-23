function solution(my_string, queries) {
  for (let q of queries) {
    var answer = "";
    answer += my_string.substring(0, q[0]);

    let tmp = my_string.substring(q[0], q[1] + 1);

    for (let i = tmp.length - 1; i >= 0; i--) {
      answer += tmp[i];
    }

    answer += my_string.substring(q[1] + 1);

    my_string = answer;
  }

  return answer;
}