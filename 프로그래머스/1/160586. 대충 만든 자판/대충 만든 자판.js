function solution(keymap, targets) {
  var answer = [];
  var dict = {};

  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      if (!dict[keymap[i][j]] || dict[keymap[i][j]] > j + 1)
        dict[keymap[i][j]] = j + 1;
    }
  }
  targets.map((e) => {
    var tmp = 0;
    var tArr = e.split("");
    for (var k = 0; k < tArr.length; k++) {
      console.log(tArr[k]);
      if (!dict[tArr[k]]) {
        // 사전에 없으면 for 문 탈출
        tmp = -1;
        break;
      }
      tmp += dict[tArr[k]];
    }
    answer.push(tmp);
  });

  return answer;
}