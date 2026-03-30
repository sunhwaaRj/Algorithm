function solution(n) {
    var answer = [];
    var l = String(n).split("");
    
    for (var i=l.length-1;i>=0;i--){
        answer.push(+l[i]);
    }
    return answer;
}