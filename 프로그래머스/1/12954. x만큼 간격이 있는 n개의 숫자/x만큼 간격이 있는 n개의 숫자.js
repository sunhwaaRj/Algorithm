function solution(x, n) {
    var answer = [];
    if(x > 0) {
        for(var i=x;i<=x*n;i+=x) answer.push(i);
    } else if (x==0){
        for(var i=0;i<n;i++) answer.push(x);
    } else {
        for(var i=x;i>=x*n;i+=x) answer.push(i);
    }
    return answer;
}