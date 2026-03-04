function solution(a, b) {
    var answer = 0;
    var v1 = String(a);
    var v2 = String(b);
    
    if(Number(v1 + v2) < Number(v2 + v1))
        answer = Number(v2 + v1);
    else
        answer = Number(v1 + v2)
    
    return answer;
}