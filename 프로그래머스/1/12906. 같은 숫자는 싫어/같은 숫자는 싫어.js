function solution(arr)
{
    var answer = [];
    // arr[i] 과 [i+1] 이 다를 때만 answer 에 추가
    for(var i=0 ; i<arr.length;i++){
        if(arr[i] !== arr[i+1]) answer.push(arr[i]);
    }
    
    return answer;
}