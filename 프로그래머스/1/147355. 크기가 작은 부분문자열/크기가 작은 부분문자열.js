function solution(t, p) {
    var answer = 0;
    for(var i=0;i<=t.length-p.length;i++){
        if(+t.slice(i, i+p.length) <= +p) answer++;
    }
    
    return answer;
}