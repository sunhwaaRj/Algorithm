function solution(food) {
    var answer = '';
    var revans = '';
    // i 값이 1, 2, 3인 것 짝수라면 반, 홀수라면 -1 하고 반
    // food[i]/2 를 Math.floor 한 것만큼 i 값 반복
    for(var i=1;i<=food.length;i++){
        answer += String(i).repeat(food[i]/2);
    }
    
    return answer + '0' + [...answer].reverse().join('');
}