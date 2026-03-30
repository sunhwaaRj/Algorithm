function solution(arr, divisor) {
    var answer = [];
    for(var i of arr){
        if(i % divisor == 0) answer.push(i);
    }
    
    if (answer.length == 0) return [-1];
    else return answer.sort((a, b) => a-b);
}