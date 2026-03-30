function solution(arr) {
    var answer = 0;
    for(var i of arr){
        answer+= i;
    }
    return answer / arr.length;
}