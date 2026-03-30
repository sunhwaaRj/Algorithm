function solution(left, right) {
    var answer = 0;
    for(var i=left;i<=right;i++){
        var num = 0;
        for(var j=1;j<i;j++){
            if(Number.isInteger(i / j)) num++;
        }
        num % 2 !== 0 ? answer += i : answer -= i;
    }
    return answer;
}