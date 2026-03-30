function solution(n) {
    var answer = '';
    var i = 1;
    while(i <= n) {
        i % 2 !== 0 ? answer+='수' : answer+= '박';
        i++;
    }
    return answer;
}