function solution(n) {
    var answer = "";
    for(var i of String(n).split("").sort((a, b) => b-a)) answer+=i;
    return +answer;
}