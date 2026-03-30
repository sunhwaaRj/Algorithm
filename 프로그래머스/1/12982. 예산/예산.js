function solution(d, budget) {
    var answer = 0;
    var i = 0;
    while(budget >= 0){
        budget -= d.sort((a, b) => a-b)[i];
        i++;
        answer++;
    }
    return answer-1;
}