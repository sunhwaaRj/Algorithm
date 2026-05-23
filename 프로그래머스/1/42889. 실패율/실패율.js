function solution(N, stages) {
    var answer = [];
    var sortArr = [];
    var realAnswer = [];
    
    for(var i=1;i<=N;i++){
        var n = stages.filter((x) => x===i).length;
        var all = stages.filter((x) => x>=i).length

        all !== 0 ? answer.push([i, n/all]) : answer.push([i, 0]);
    }
    
    sortArr = answer.sort((a, b) => b[1]-a[1]);
    
    for(var j=0;j<sortArr.length;j++){
        realAnswer.push(sortArr[j][0])
    }
    
    return realAnswer;
}