function solution(ingredient) {
  var answer = 0;
  var arr = [];
  for (var i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);

    if (arr.slice(-4).join("") == "1231") {
      answer++;
      arr.splice(-4, 4);
    }
  }

  return answer;
}