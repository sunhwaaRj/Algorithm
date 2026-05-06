function solution(k, m, score) {
    var answer = 0;
    var sortarr = score.sort((a, b) => b-a);

    for(var i=0;i<score.length;i+=m){
        if(sortarr[i+m-1] !== undefined)
            answer += m*sortarr[i+m-1];
    }
    
    return answer;
}