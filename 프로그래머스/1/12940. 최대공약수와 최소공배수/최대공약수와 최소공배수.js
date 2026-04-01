function solution(n, m) {
    var answer = [];
    var min = Math.min(n, m);
    var max = Math.max(n, m);
    
    for(var i = min;i>0;i--){
        if((n % i ==0 ) && (m % i == 0)) {
            answer.push(i, (min*max)/i);
            break;
        }
    }
    return answer;
}