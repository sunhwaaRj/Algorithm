function solution(n){
    var answer=0;
    for(var i of String(n).split("")){
        answer += +i;
    }
    
    return answer;
}